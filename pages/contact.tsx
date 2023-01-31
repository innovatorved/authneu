import React from "react";
import Layout from "../components/Layout";

import { APP_INFO } from "../environments/index";

export default function contact() {
  const { TITLE } = APP_INFO;
  return (
    <Layout title={`Contact | ${TITLE}`}>
      <main className="flex justify-center mt-8 ">
        <h1 className="font-primary hover:underline text-secondary-300">
          Contact
        </h1>
      </main>
    </Layout>
  );
}
