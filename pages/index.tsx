import Layout from "../components/Layout";

import { useRouter } from "next/router";

import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authentication";

import { APP_INFO } from "../environments/index";

const IndexPage = () => {
  const { isAuthenticated, LogoutUser } = useContext(AuthContext);
  const { TITLE } = APP_INFO;
  const router = useRouter();

  useEffect(() => {}, [1]);

  useEffect(() => {
    if (isAuthenticated === false) {
      LogoutUser();
    }
  }, [isAuthenticated]);

  return (
    <Layout title={`Dashboard | ${TITLE}`}>
      <main className="flex justify-center mt-8 font-primary">
        <h1 className="font-primary hover:underline text-secondary-300">
          {isAuthenticated === true ? "Hello Next.js 👋" : "Unauthorished!"}
        </h1>
      </main>
    </Layout>
  );
};

export default IndexPage;
