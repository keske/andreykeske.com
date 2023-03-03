import "@/styles/globals.css";

import { Inter } from "@next/font/google";
import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import type { AppProps } from "next/app";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "400", "600", "700", "800", "900"],
});

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ParallaxProvider>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ParallaxProvider>
  );
}

export default MyApp;
