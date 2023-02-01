import React from "react";
import { AppProps } from "next/app";

import AuthState from "../context/authentication";

import { ToastContainer } from "react-toastify";

import "../styles/index.css";
import "../styles/notify.css";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <Component {...pageProps} />
      <ToastContainer />
    </AuthState>
  );
}

export default MyApp;
