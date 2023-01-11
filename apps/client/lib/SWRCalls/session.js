import { getCookie, setCookie } from "cookies-next";

export const isLoggedIn = ({ req = "", res = "" }) => {
  const token = getCookie("token", { req, res });
  return !!token;
};

export const loginWithTokenOrUser = async ({ jwt, user: { username, email } }) => {
  if (jwt) {
    setCookie("token", jwt);
  } else {
    console.log("logging in with user");
  }
};