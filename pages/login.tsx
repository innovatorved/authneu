import Link from "next/link";
import Layout from "../components/Layout";

import { LockSVG, ColoredLock, CrossSVG } from "../assets/SVG/image";

const Login = () => (
  <Layout title="Login | NextImg">
    <div className="pt-16">
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-xl md:text-3xl font-extrabold text-gray-900">
              Log in to your account{" "}
              <span className="text-indigo-600">NextImg</span>
            </h2>
          </div>

          <div className="px-5 py-4 bg-gray-100 rounded-lg flex items-center justify-between mt-7">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <ColoredLock />
              </div>

              <p className="md:text-sm text-xs text-gray-800 pl-3">
                We take privacy issues seriously. You can be sure that your
                personal data is securely protected.
              </p>
            </div>
            <button className="block focus:outline-none focus:ring-2 focus:ring-gray-700 rounded">
              <CrossSVG />
            </button>
          </div>

          <form className="mt-8 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-gray-900 font-semibold"
                >
                  Remember Me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockSVG />
                </span>
                Sign in
              </button>
              <div className="mt-2">
                <Link href="/signup">
                  <span className="font-medium pr-2 leading-5 text-gray-800">
                    Don't have an account?{" "}
                  </span>
                  <button
                    type="button"
                    className="text-sm font-medium rounded-md text-indigo-600 hover:text-indigo-700 focus:outline-none"
                  >
                    Sign Up
                  </button>
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
);

export default Login;
