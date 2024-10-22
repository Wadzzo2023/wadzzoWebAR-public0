import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { PaperProvider } from "react-native-paper";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <PaperProvider>
        <Component {...pageProps} />
      </PaperProvider>
    </QueryClientProvider>
  );
}
