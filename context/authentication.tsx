import { createContext, useState, useEffect } from "react";

import { useRouter } from "next/router";

import { api } from "../services/api";
import { getToken, removeToken } from "../helpers/index";
import { User } from "../interfaces/index";

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

  const { jwtGet } = api;

  const VerifyUser = () => {
    if (getToken()) {
      jwtGet("/auth/verifytoken")
        .then(async (res) => {
          if (res?.success === true) {
            console.log(res.data);
            setUserInfo(res?.data);
            setIsAuthenticated(true);
          }
        })
        .catch((e) => {
          if (e.response.status === 401) {
            console.log(e.json?.message);
            LogoutUser();
          }
        });
    } else {
      setIsAuthenticated(false);
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
        LogoutUser,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthState;
export { AuthContext };
