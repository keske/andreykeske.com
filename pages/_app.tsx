import "../styles/globals.css";

import * as React from "react";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;
