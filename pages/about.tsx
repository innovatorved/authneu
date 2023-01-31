import React from "react";
import Layout from "../components/Layout";

import { APP_INFO } from "../environments/index";

export default function about() {
  const { TITLE } = APP_INFO;
  return (
    <Layout title={`About | ${TITLE}`}>
      <main className="flex justify-center mt-8 font-primary">
        <h1 className="font-primary hover:underline text-secondary-300">
          About Page
        </h1>
      </main>
    </Layout>
  );
}
