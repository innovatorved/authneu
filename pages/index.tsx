import Layout from "../components/Layout";
import DisplayUser from "../components/DisplayUser";

import { useRouter } from "next/router";

import { useContext, useEffect } from "react";
import { AuthContext } from "../context/authentication";

import { APP_INFO } from "../environments/index";

const IndexPage = () => {
  const { isAuthenticated, userInfo } = useContext(AuthContext);
  const { TITLE } = APP_INFO;
  const router = useRouter();

  useEffect(() => {}, [1]);

  return (
    <Layout title={`Dashboard | ${TITLE}`}>
      <main className="flex justify-center mt-8">
        {isAuthenticated === true ? (
          <div className="">
            <h1 className="font-primary hover:underline text-secondary-300 mb-8">
              "Hello👋 You are Authenticated !"
            </h1>
            <DisplayUser userInfo={userInfo} />
          </div>
        ) : (
          <h1 className="font-primary hover:underline text-secondary-300">
            "Unauthorished!"
          </h1>
        )}
      </main>
    </Layout>
  );
};

export default IndexPage;
