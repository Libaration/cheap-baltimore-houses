import { getCookie, setCookie, deleteCookie } from "cookies-next";

export const isLoggedIn = ({ req = "", res = "" }) => {
  const token = getCookie("token", { req, res });
  return !!token;
};

export const loginWithTokenOrUser = async ({ jwt, user = {} }) => {
  if (jwt) {
    setCookie("token", jwt);
  } else {
    console.log("logging in with user");
  }
};

export const logout = ({ req = "", res = "" }) => {
  deleteCookie("token", { req, res });
};
