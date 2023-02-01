export const getToken = () => {
  return localStorage.getItem("token");
};

export const removeToken = () => {
  localStorage.removeItem("token");
};

export const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time));
};
