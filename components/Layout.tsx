import React, { ReactNode } from "react";
import Head from "next/head";

import Header from "./Header";
import Footer from "./Footer";

type Props = {
  children?: ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Header />
      </header>
      <div className="min-h-[30rem]">{children}</div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};
export default Layout;
