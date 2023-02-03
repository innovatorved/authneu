import React from "react";
import { AppProps } from "next/app";

import AuthState from "../context/authentication";

import { ToastContainer } from "react-toastify";

import { Arima_Madurai } from "@next/font/google";
const arima = Arima_Madurai({
  subsets: ["latin"],
  variable: "--font-arime-madurai",
  weight: "400",
});

import "../styles/index.css";
import "../styles/notify.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthState>
      <div className={`${arima.variable}`}>
        <Component {...pageProps} />
      </div>
      <ToastContainer className={arima.className} />
    </AuthState>
  );
}

export default MyApp;
