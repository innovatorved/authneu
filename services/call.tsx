import { api } from "./api";
const { jwtGet, post } = api;

const getUserDetailsAPI = async () => {
  let err = null;
  let data = null;
  try {
    data = await jwtGet("/auth/verifytoken");
  } catch (e) {
    if (e.response?.status === 401) {
      err = e?.json;
    }
  }
  return [data, err];
};

const loginUserAPI = async (body) => {
  let err = null;
  let data = null;

  try {
    data = await post("/auth/login", body);
  } catch (e) {
    if (e?.response?.status === 400) {
      err = e?.json;
    }
  }

  return [data, err];
};

const createUserAPI = async (body) => {
  let err = null;
  let data = null;
  try {
    data = await post("/auth/signup", body);
  } catch (e) {
    if (e?.response?.status === 400) {
      err = e?.json;
    }
  }
  return [data, err];
};

export { getUserDetailsAPI, createUserAPI, loginUserAPI };
