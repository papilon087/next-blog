import { Poppins } from "next/font/google";
import type { AppProps } from "next/app";

import { ApolloProvider } from '@apollo/client'
import { client } from '@/lib/apollo'
import "@/styles/globals.css";

const poppings = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <main className={`${poppings.variable} font-sans`}>
        <Component {...pageProps} />;
      </main>
    </ApolloProvider>
  );
}
