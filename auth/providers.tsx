"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import React from "react";

type Props = {
    children?: React.ReactNode
}

export const NextAuthProvider = ({ children }: Props) => {
    return <SessionProvider>{children}</SessionProvider>
}

export const QueryProvider = ({ children }: Props) => {
    const [client] = React.useState(
        new QueryClient({ defaultOptions: { queries: { staleTime: 5000 }}})
    )

    return (
        <QueryClientProvider client={client}>
            {children}
        </QueryClientProvider>
    )
}
