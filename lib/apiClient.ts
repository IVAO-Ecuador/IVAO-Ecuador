// Ligero cliente HTTP usando fetch para centralizar baseURL, headers y manejo de errores
export type ApiClientOptions = {
  baseURL?: string;
  defaultHeaders?: Record<string, string>;
};

const defaultOptions: ApiClientOptions = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || '',
  defaultHeaders: { 'Content-Type': 'application/json' },
};

export class ApiClient {
  baseURL: string;
  defaultHeaders: Record<string, string>;

  constructor(options?: ApiClientOptions) {
    const opts = { ...defaultOptions, ...(options || {}) };
    this.baseURL = opts.baseURL || '';
    this.defaultHeaders = opts.defaultHeaders || {};
  }

  private buildUrl(path: string) {
    if (!path) return this.baseURL;
    if (path.startsWith('http')) return path;
    return `${this.baseURL.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
  }

  async get<T = any>(path: string, headers?: Record<string, string>) {
    return this.request<T>(path, { method: 'GET', headers });
  }

  async post<T = any>(path: string, body?: any, headers?: Record<string, string>) {
    return this.request<T>(path, { method: 'POST', body: JSON.stringify(body), headers });
  }

  async request<T = any>(path: string, init: RequestInit = {}) {
    const url = this.buildUrl(path);
    const headers = { ...this.defaultHeaders, ...(init.headers || {}) };
    const finalInit: RequestInit = { ...init, headers };

    try {
      const res = await fetch(url, finalInit);
      const text = await res.text();
      const data = text ? JSON.parse(text) : undefined;
      if (!res.ok) {
        const err: any = new Error(`HTTP error ${res.status}`);
        err.status = res.status;
        err.data = data;
        throw err;
      }
      return data as T;
    } catch (err) {
      // Re-lanzamos el error para que el caller lo maneje
      throw err;
    }
  }
}

export const apiClient = new ApiClient();
