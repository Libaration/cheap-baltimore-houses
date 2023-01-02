import { fetchAPI } from "./api";
const recentHomes = async (limit) => {
  return await fetchAPI(
    `/homes?populate=*&pagination[pageSize]=${limit}&sort=id:DESC`
  );
};
const allHomes = async () => {
  return await fetchAPI(`/homes?populate=*&sort=id:DESC`);
};

const getHome = async (id) => {
  return await fetchAPI(`/homes/${id}?populate=*`);
};

export const homesCalls = { get: { recentHomes, allHomes, getHome } };
