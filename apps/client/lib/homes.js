import { fetchAPI } from "./api";
const recentHomes = async (limit) => {
  return await fetchAPI(
    `/homes?populate=*&pagination[pageSize]=${limit}&sort=id:DESC`
  );
};
export const homesCalls = { get: { recentHomes } };
