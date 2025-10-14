import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest'
import { apiClient, ApiClient } from '../lib/apiClient'

describe('apiClient', () => {
  let originalFetch: any

  beforeEach(() => {
    originalFetch = globalThis.fetch
  })

  afterEach(() => {
    globalThis.fetch = originalFetch
    vi.restoreAllMocks()
  })

  it('parses JSON response for GET', async () => {
    globalThis.fetch = vi.fn(async () => ({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({ hello: 'world' })
    }))

    const data = await apiClient.get('/test')
    expect(data).toEqual({ hello: 'world' })
  })

  it('throws on non-ok response with data', async () => {
    globalThis.fetch = vi.fn(async () => ({
      ok: false,
      status: 500,
      text: async () => JSON.stringify({ error: 'server' })
    }))

    await expect(apiClient.get('/error')).rejects.toMatchObject({ status: 500 })
  })

  it('uses absolute URLs as-is', async () => {
    const client = new ApiClient({ baseURL: 'https://example.com/api' })
    globalThis.fetch = vi.fn(async (url: string) => ({
      ok: true,
      status: 200,
      text: async () => JSON.stringify({ url }),
    })) as any

    const data = await client.get('https://external.test/hello')
    // ensure fetch was called with the absolute URL
    expect((globalThis.fetch as any).mock.calls[0][0]).toBe('https://external.test/hello')
    expect(data.url).toBe('https://external.test/hello')
  })
})
