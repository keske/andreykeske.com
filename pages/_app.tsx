import "@/styles/globals.css";

import * as React from "react";
import { ParallaxProvider } from "react-scroll-parallax";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <main>
        <Component {...pageProps} />
      </main>
    </ParallaxProvider>
  );
}

export default MyApp;
