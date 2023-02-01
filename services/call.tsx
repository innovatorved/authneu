import { api } from "./api";
const { jwtGet } = api;

const getUserDetails = async () => {
  let err = null;
  let data = null;
  try {
    data = await jwtGet("/auth/verifytoken");
  } catch (e) {
    if (e.response.status === 401) {
      err = e.json;
    }
  }
  return [data, err];
};

export { getUserDetails };
