import "@/styles/globals.css";
import {
  Aboreto,
  // Inter
} from "@next/font/google";

import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import type { AppProps } from "next/app";

const aboreto = Aboreto({ subsets: ["latin"], weight: "400" });

// const inter = Inter({ subsets: ["latin"], weight: "400" });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <main className={aboreto.className}>
        <Component {...pageProps} />
        <div id="desctiption" />
      </main>
    </ParallaxProvider>
  );
}

export default MyApp;
