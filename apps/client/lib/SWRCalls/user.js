import useSWR from "swr";
import { getStrapiURL } from "../api";
const getTokenFromStorage = () => {
  if (typeof window !== "undefined") {
    window.localStorage.getItem("token");
  } else {
    return null;
  }
};
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const authorizedFetcher =
  (token) =>
  (...args) =>
    fetch(...args, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then((res) => {
      if (!res.ok) {
        const error = new Error("An error occurred while fetching the data.");
        error.info = res.json();
        error.status = res.status;
        throw error;
      } else {
        return res.json();
      }
    });

export function useCheckEmail(shouldCheck, email) {
  const { data, error, isLoading } = useSWR(
    shouldCheck ? `https://open.kickbox.com/v1/disposable/${email}` : null,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
      revalidateOnReconnect: false,
      dedupingInterval: 12000,
    }
  );
  return {
    data,
    isLoading,
    isError: error,
  };
}

export function useUser(token) {
  const { data, error, isLoading } = useSWR(
    getStrapiURL("/api/users/me"),
    authorizedFetcher(token)
  );
  return {
    user: data,
    isLoading,
    isError: error,
  };
}

export function sendUserCreate(user) {
  return fetcher(getStrapiURL("/api/auth/local/register"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: user.email,
      email: user.email,
      password: user.password,
    }),
  });
}
