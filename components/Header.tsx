import React, { useState } from "react";
import Link from "next/link";

import { MenuBarSVG } from "../assets/SVG/image";

export default function Header() {
  const [toggle, setToggle] = useState(false);
  {
    /* 
            p-2 lg:px-4 md:mx-2 text-white font-primary rounded bg-primary-300
            p-2 lg:px-4 md:mx-2 text-secondary-300 font-primary rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300
    */
  }
  return (
    <nav className="py-2 md:py-4 bg-gray-100">
      <div className="container px-4 mx-auto md:flex md:items-center">
        <div className="flex justify-between items-center">
          <Link
            href="#"
            className="font-bold text-xl text-primary-300 font-primary"
          >
            NextImg
          </Link>
          <button
            className="border border-solid border-secondary-300 px-3 py-1 rounded text-secondary-300 opacity-50 hover:opacity-75 md:hidden"
            id="navbar-toggle"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            <MenuBarSVG />
          </button>
        </div>

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0`}
          id="navbar-collapse"
        >
          <Link
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-secondary-300 font-primary rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            About
          </Link>
          <Link
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-secondary-300 font-primary rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="p-2 lg:px-4 md:mx-2 text-secondary-300 font-primary rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
          >
            Contact
          </Link>
          <Link
            href="/login"
            className="p-2 lg:px-4 md:mx-2 text-primary-300 font-primary text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="p-2 lg:px-4 md:mx-2 text-primary-300 font-primary text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
