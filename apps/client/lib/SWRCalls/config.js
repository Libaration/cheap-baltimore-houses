import { getCookie } from "cookies-next";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getAuthorizedHeaders = ({ req = "", res = "" }) => {
  const token = getCookie("token", { req, res });
  return {
    "Content-Type": "application/json",
    Authorization: `bearer ${token}`,
  };
};

export const fetcherWithAuth = async (...args) => {
  const response = await fetch(...args, {
    headers: getAuthorizedHeaders({}),
  });
  if (!response.ok) {
    const error = new Error("An error occurred while fetching the data.");
    // Attach extra info to the error object.
    error.info = await response.json();
    error.status = response.status;
    throw error;
  }
  return response.json();
};
