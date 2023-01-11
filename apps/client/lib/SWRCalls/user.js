import useSWR from "swr";
import { getStrapiURL } from "../api";
import { fetcher, fetcherWithAuth } from "./config";
import { getAuthorizedHeaders } from "./config";

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

export function useUser() {
  const url = `${getStrapiURL("/api/users/me")}`;
  const { data, mutate, error } = useSWR(url, fetcherWithAuth);
  const loading = !data && !error;
  const loggedOut = error && error.status === 401;
  return {
    user: data,
    isLoading: loading,
    isError: error,
    loggedOut,
    mutate,
  };
}

export async function sendUserCreate(user, mock = false) {
  if (mock) {
    return {
      jwt: "abcefghijklmnopqrstuvwxyz",
      user: {
        id: 24,
        username: "ok@ok.com",
        email: "ok@ok.com",
        provider: "local",
        confirmed: true,
        blocked: false,
        createdAt: "2023-01-11T06:18:38.000Z",
        updatedAt: "2023-01-11T06:18:38.000Z",
      },
    };
  }
  const response = await fetcher(getStrapiURL("/api/auth/local/register"), {
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
  return response;
}
