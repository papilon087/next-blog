import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import "@/styles/globals.css";

const poppings = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppings.variable} font-sans`}>
      <Component {...pageProps} />;
    </main>
  );
}
