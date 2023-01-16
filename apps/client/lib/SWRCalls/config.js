import { getCookie } from "cookies-next";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());

export const getToken = () => {
  return getCookie("token", {});
};

export const fetchWithToken = async (url, token, options = {}) => {
  const response = await fetch(url, {
    method: options.method || "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${token}`,
    },
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
