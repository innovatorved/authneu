import { createContext, useState, useEffect } from "react";

import { useRouter } from "next/router";

import { getToken, removeToken, setToken } from "../helpers/index";
import { User } from "../interfaces/index";

import {
  getUserDetailsAPI,
  createUserAPI,
  loginUserAPI,
} from "../services/call";

const AuthContext = createContext(null);

const AuthState = (props) => {
  const [isAuthenticated, setIsAuthenticated] = useState<Boolean>(null);
  const router = useRouter();
  const [loading, setLoading] = useState<Boolean>(true);
  const [userInfo, setUserInfo] = useState<User>({
    id: "",
    first_name: "",
    last_name: "",
    email: "",
    username: "",
  });

  useEffect(() => {
    VerifyUser();
    setLoading(false);
  }, [1]);

  const LoginToAccount = async (body) => {
    const [data, err] = await loginUserAPI(body);
    if (data?.success === true) {
      console.log("Succesfully Login");
      setIsAuthenticated(true);
      setUserInfo(data?.data);
      setToken(data?.token);
      router.push("/");
    } else if (err) {
      console.log(err?.message);
    }
  };

  const CreateAccount = async (body) => {
    const [data, err] = await createUserAPI(body);
    if (data?.success === true) {
      console.log("Account Created");
      router.push("/login");
    } else if (err) {
      console.log(err?.message);
    }
  };

  const VerifyUser = async () => {
    if (!getToken()) {
      setIsAuthenticated(false);
      return;
    }
    const [data, err] = await getUserDetailsAPI();
    if (data?.success === true) {
      setIsAuthenticated(true);
      console.log(data.data);
      setUserInfo(data?.data);
    } else if (err) {
      console.log(err?.message);
      LogoutUser();
    }
  };

  const LogoutUser = () => {
    setUserInfo({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      username: "",
    });
    removeToken();
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{
        userInfo,
        loading,
        setLoading,
        isAuthenticated,
        setUserInfo,
        VerifyUser,
        LoginToAccount,
        CreateAccount,
        LogoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
export { AuthContext };
