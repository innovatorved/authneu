import Link from "next/link";
import Layout from "../components/Layout";

import { useState, useRef } from "react";

import { LockSVG, ColoredLock, CrossSVG } from "../assets/SVG/image";

const Login = () => {
  const [username_check, setUsername_check] = useState(false);
  const [pass, setPass] = useState({
    password: "",
    confirmPassword: "",
  });
  const ChangePass = (e) => {
    setPass({
      ...pass,
      [e.target.name]: e.target.value,
    });
  };

  const first_ref = useRef();
  const last_ref = useRef();
  const email_ref = useRef();
  const username_ref = useRef();

  return (
    <Layout title="Join us | NextImg">
      <div className="pt-16">
        <div className="flex items-center justify-center">
          <div className="xl:w-10/12 w-full px-8">
            <div className="xl:px-24">
              <div>
                <h2 className="mt-6 text-center text-xl md:text-3xl font-extrabold text-gray-900">
                  Create your account{" "}
                  <span className="text-indigo-600">NextImg</span>
                </h2>
              </div>
              <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <ColoredLock />
                  </div>

                  <p className="md:text-sm text-xs  text-gray-800 pl-3">
                    We take privacy issues seriously. You can be sure that your
                    personal data is securely protected.
                  </p>
                </div>
                <button className="block focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
                  <CrossSVG />
                </button>
              </div>
              <form>
                <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                  <div className="w-80">
                    <div className="flex items-center">
                      <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                        Personal Information
                      </h1>
                    </div>
                    <p className="mt-4 text-xs md:text-sm leading-5 text-gray-600">
                      Information about the section could go here and a brief
                      description of how this might be used.
                    </p>
                  </div>
                  <div>
                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="firstName"
                        >
                          First name
                        </label>
                        <input
                          type="text"
                          tabIndex={0}
                          ref={first_ref}
                          className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          name="firstname"
                          aria-labelledby="firstName"
                          placeholder="John"
                          required={true}
                        />
                      </div>
                      <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="lastName"
                        >
                          Last name
                        </label>
                        <input
                          type="text"
                          tabIndex={0}
                          ref={last_ref}
                          name="lastname"
                          className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          aria-labelledby="lastName"
                          placeholder="Doe"
                          required={true}
                        />
                      </div>
                    </div>
                    <div className="md:flex items-center lg:ml-24 mt-8">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="username"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          tabIndex={0}
                          ref={username_ref}
                          name="username"
                          className={`${
                            username_check === true ? "border-red-800" : ""
                          } w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800`}
                          aria-labelledby="username"
                          placeholder="johndoe"
                          minLength={5}
                          // onBlur={runthis}
                          required={true}
                        />
                      </div>
                      <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="emailAddress"
                        >
                          Email address
                        </label>
                        <input
                          type="email"
                          tabIndex={0}
                          ref={email_ref}
                          name="email"
                          className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          aria-labelledby="emailAddress"
                          placeholder="youremail@example.com"
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                  <div className="w-80">
                    <div className="flex items-center">
                      <h1 className="text-xl font-medium pr-2 leading-5 text-gray-800">
                        Security
                      </h1>
                    </div>
                    <p className="mt-4 text-xs md:text-sm leading-5 text-gray-600">
                      Information about the section could go here and a brief
                      description of how this might be used.
                    </p>
                  </div>
                  <div>
                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                      <div className="md:w-64">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="password"
                        >
                          Password
                        </label>
                        <input
                          type="password"
                          tabIndex={0}
                          name="password"
                          value={pass.password}
                          onChange={ChangePass}
                          className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800"
                          aria-labelledby="password"
                          minLength={8}
                          placeholder="Enter your password"
                          required={true}
                        />
                      </div>
                      <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                        <label
                          className="text-sm leading-none text-gray-800"
                          id="confirmPassword"
                        >
                          Confirm Password{" "}
                          <span
                            className={`${
                              pass.password === pass.confirmPassword
                                ? "hidden"
                                : ""
                            } font-serif mt-4 pl-4 text-sm leading-5 text-red-600`}
                          >
                            Not Matched !
                          </span>
                        </label>
                        <input
                          type="password"
                          tabIndex={0}
                          name="confirmPassword"
                          value={pass.confirmPassword}
                          onChange={ChangePass}
                          className={`${
                            pass.password === pass.confirmPassword
                              ? ""
                              : "border-red-800"
                          } w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-gray-600 text-sm font-medium leading-none text-gray-800`}
                          aria-labelledby="confirmPassword"
                          placeholder="Confirm Your Password"
                          minLength={8}
                          required={true}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 flex flex-col-reverse md:flex-row justify-between border-b border-gray-200 pb-16 mb-4">
                  <div>
                    <Link href="/login">
                      <span className="font-medium pr-2 leading-5 text-gray-800">
                        Have an Account?{" "}
                      </span>
                      <button
                        type="button"
                        className="text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-700 focus:outline-none"
                      >
                        SignIn
                      </button>
                    </Link>
                  </div>
                  <div>
                    <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4 mb-2">
                      <div className="md:w-64 md:mt-0 mt-4">
                        <button
                          type="submit"
                          disabled={
                            (pass.password === pass.confirmPassword
                              ? false
                              : true) || username_check
                          }
                          className={`${
                            pass.password === pass.confirmPassword
                              ? "hover:bg-indigo-700"
                              : ""
                          } group relative w-64 lg:w-96 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                        >
                          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockSVG />
                          </span>
                          Create Account
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
