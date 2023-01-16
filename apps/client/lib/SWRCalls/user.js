import useSWR from "swr";
import { getStrapiURL } from "../api";
import { fetcher, fetcherWithAuth } from "./config";
import { isLoggedIn } from "./session";
import { getCookie } from "cookies-next";

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
  const url = `${getStrapiURL("/api/users/me?populate[liked_homes][fields][0]=id")}`;
  const { data, error, isLoading, mutate } = useSWR(isLoggedIn({}) ? url : null, fetcherWithAuth);
  return {
    user: data,
    isLoading,
    isError: error != null,
    isAuthorized: error?.status === 401 ? false : true,
    mutate,
  };
}
//TODO FIX THIS
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

export async function sendUserLogin(user, mock = false) {
  const response = await fetcher(getStrapiURL("/api/auth/local"), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier: user.email,
      password: user.password,
    }),
  });

  return response;
}

export async function userToggleLike(homeId) {
  const response = await fetch(getStrapiURL(`/api/user/toggleLike/${homeId}`), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `bearer ${getCookie("token")}`,
    },
  });
  return response;
}
