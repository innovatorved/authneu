import React from "react";
import { AppProps } from "next/app";

import AuthState from "../context/authentication";

import { ToastContainer } from "react-toastify";

import "../styles/index.css";
import "../styles/notify.css";
import "react-toastify/dist/ReactToastify.css";

import { Arima_Madurai } from "@next/font/google";

const inter = Arima_Madurai({
  subsets: ["latin"],
  variable: "--font-arime-madurai",
  weight: "400",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <main className={`${inter.variable}`}>
        <Component {...pageProps} />
      </main>
      <ToastContainer />
    </AuthState>
  );
}

export default MyApp;
