import Link from "next/link";
import { StaticLayout } from "../components/Layout";

import { useState, useRef, useContext } from "react";

import {
  LockSVG,
  ColoredLock,
  CrossSVG,
  ProcessCircle,
} from "../assets/SVG/image";
import { APP_INFO } from "../environments/index";
import { AuthContext } from "../context/authentication";

const Login = () => {
  const { TITLE } = APP_INFO;
  const { CreateAccount } = useContext(AuthContext);

  const [username_check, setUsername_check] = useState<boolean>(false);
  const [process, setProcess] = useState<boolean>(false);

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

  const first_ref = useRef<HTMLInputElement>(null);
  const last_ref = useRef<HTMLInputElement>(null);
  const email_ref = useRef<HTMLInputElement>(null);
  const username_ref = useRef<HTMLInputElement>(null);

  const Submit = (e) => {
    e.preventDefault();
    if (
      !(
        first_ref!.current.value &&
        last_ref!.current.value &&
        email_ref!.current.value &&
        username_ref!.current.value &&
        pass.password
      )
    ) {
      console.log("Fill All values");
      return;
    }
    setProcess(true);
    const body = {
      first_name: first_ref!.current.value,
      last_name: last_ref!.current.value,
      email: email_ref!.current.value,
      username: username_ref!.current.value,
      password: pass?.password,
    };
    const err = CreateAccount(body);
    if (err) {
      // setProcess(false);
    }
  };

  return (
    <StaticLayout title={`Join us | ${TITLE}`}>
      <div className="flex items-center justify-center py-10">
        <div className="xl:w-10/12 w-full px-8">
          <div className="xl:px-24">
            <div>
              <h2 className="mt-6 text-center text-xl md:text-3xl font-extrabold text-secondary-300 font-primary">
                Create your account{" "}
                <span className="text-primary-100">{TITLE}</span>
              </h2>
            </div>
            <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <ColoredLock />
                </div>

                <p className="md:text-sm text-xs  text-secondary-300 pl-3">
                  We take privacy issues seriously. You can be sure that your
                  personal data is securely protected.
                </p>
              </div>
              <button className="block focus:outline-none focus:ring-2 focus:ring-secondary-300 rounded">
                <CrossSVG />
              </button>
            </div>
            <form onSubmit={Submit}>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-secondary-300 font-primary">
                      Personal Information
                    </h1>
                  </div>
                  <p className="mt-4 text-xs md:text-sm leading-5 text-secondary-300">
                    Unlock Your Identity: Share Your Personal Information for a
                    Better Experience.
                  </p>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-secondary-300"
                        id="firstName"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        tabIndex={0}
                        ref={first_ref}
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-secondary-300 text-sm font-medium leading-none text-secondary-300"
                        name="firstname"
                        aria-labelledby="firstName"
                        placeholder="John"
                        required={true}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-secondary-300"
                        id="lastName"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        tabIndex={0}
                        ref={last_ref}
                        name="lastname"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-secondary-300 text-sm font-medium leading-none text-secondary-300"
                        aria-labelledby="lastName"
                        placeholder="Doe"
                        required={true}
                      />
                    </div>
                  </div>
                  <div className="md:flex items-center lg:ml-24 mt-8">
                    <div className="md:w-64 ">
                      <label
                        className="text-sm leading-none text-secondary-300"
                        id="emailAddress"
                      >
                        Email address
                      </label>
                      <input
                        type="email"
                        tabIndex={0}
                        ref={email_ref}
                        name="email"
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-secondary-300 text-sm font-medium leading-none text-secondary-300"
                        aria-labelledby="emailAddress"
                        placeholder="youremail@example.com"
                        required={true}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-secondary-300"
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
                        } w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-secondary-300 text-sm font-medium leading-none text-secondary-300`}
                        aria-labelledby="username"
                        placeholder="johndoe"
                        minLength={5}
                        // onBlur={runthis}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 lg:flex justify-between border-b border-gray-200 pb-16 mb-4">
                <div className="w-80">
                  <div className="flex items-center">
                    <h1 className="text-xl font-medium pr-2 leading-5 text-secondary-300 font-primary">
                      Security
                    </h1>
                  </div>
                  <p className="mt-4 text-xs md:text-sm leading-5 text-secondary-300">
                    Protect What Matters Most: Ensure the Safety of Your
                    Information with Us
                  </p>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-24 lg:mt-0 mt-4">
                    <div className="md:w-64">
                      <label
                        className="text-sm leading-none text-secondary-300"
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
                        className="w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-secondary-300 text-sm font-medium leading-none text-secondary-300"
                        aria-labelledby="password"
                        minLength={8}
                        placeholder="Enter your password"
                        required={true}
                      />
                    </div>
                    <div className="md:w-64 md:ml-12 md:mt-0 mt-4">
                      <label
                        className="text-sm leading-none text-secondary-300"
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
                        } w-full p-3 mt-3 bg-gray-100 border rounded border-gray-200 focus:outline-none focus:border-secondary-300 text-sm font-medium leading-none text-secondary-300`}
                        aria-labelledby="confirmPassword"
                        placeholder="Confirm Your Password"
                        minLength={8}
                        required={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-16 flex flex-col-reverse md:flex-row justify-between border-b border-gray-200 pb-16 mb-4 font-primary">
                <div>
                  <Link href="/login">
                    <span className="font-medium pr-2 leading-5 text-secondary-300">
                      Have an Account?{" "}
                    </span>
                    <button
                      type="button"
                      className="text-sm font-medium rounded-md text-primary-100 hover:text-primary-300 focus:outline-none hover:underline"
                    >
                      SignIn
                    </button>
                  </Link>
                </div>
                <div>
                  <div className="md:flex items-center lg:ml-20 lg:mt-0 mt-4 mb-2">
                    <div className="md:w-64 md:mt-0 mt-4">
                      <button
                        type="submit"
                        disabled={
                          (pass.password === pass.confirmPassword
                            ? false
                            : true) ||
                          username_check ||
                          process
                        }
                        className={`${
                          pass.password === pass.confirmPassword
                            ? "hover:bg-primary-300"
                            : ""
                        } group relative w-64 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-primary-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
                      >
                        <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                          {process === false ? <LockSVG /> : <ProcessCircle />}
                        </span>
                        <span>Create Account</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </StaticLayout>
  );
};

export default Login;
