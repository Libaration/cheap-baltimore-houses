import { fetchAPI } from "./api";
import useSWR from "swr";
import { getStrapiURL } from "./api";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
const recentHomes = async (limit) => {
  return await fetchAPI(
    `/homes?populate=*&pagination[pageSize]=${limit}&sort=id:DESC`
  );
};
const allHomesPaginated = async ({ page, pageSize }) => {
  return await fetchAPI(
    `/homes?populate=*&sort=id:DESC&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
  );
};

function useSWRAllHomesPaginated({ page, pageSize }) {
  const { data, error, isLoading } = useSWR(
    `${getStrapiURL(
      `/api/homes?populate=*&sort=id:DESC&pagination[page]=${page}&pagination[pageSize]=${pageSize}`
    )}`,
    fetcher
  );
  return {
    data: data,
    isLoading,
    isError: error,
  };
}
const allHomes = async () => {
  return await fetchAPI(`/homes?populate=*&sort=id:DESC`);
};

const getHome = async (id) => {
  return await fetchAPI(`/homes/${id}?populate=*`);
};

export const homesCalls = {
  get: { recentHomes, allHomes, getHome, allHomesPaginated },
  getSWR: { allHomesPaginated: useSWRAllHomesPaginated },
};
