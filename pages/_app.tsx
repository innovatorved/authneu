import React from "react";
import { AppProps } from "next/app";

import AuthState from "../context/authentication";

import "../styles/index.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <Component {...pageProps} />
    </AuthState>
  );
}

export default MyApp;
