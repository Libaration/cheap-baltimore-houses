import useSWR from "swr";
import { getStrapiURL } from "../api";
import { fetcher } from "./config";
export function useAllHomes(options = {}) {
  const defaultOptions = {
    pagination: {
      paginated: false,
      page: 1,
      pageSize: 9,
    },
    filter: {
      filterByContains: false,
    },
  };
  const { pagination, filter } = { ...defaultOptions, ...options };
  const url = getURL({
    pagination,
    filter,
  });
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return {
    homes: data,
    isLoading,
    isError: error,
  };
}

function getURL({ pagination, filter }) {
  const baseURL = `${getStrapiURL("/api/homes")}`;
  const url = new URL(baseURL);
  url.searchParams.set("populate", "cover_image");
  url.searchParams.set("sort", "id:DESC");
  if (!pagination.paginated && !filter.filterByContains) return url.toString();
  if (pagination.paginated) {
    if (!pagination.page || !pagination.pageSize) {
      throw new Error("The 'page' and 'pageSize' options are required when 'paginated' is true");
    }
    url.searchParams.set("pagination[page]", parseInt(pagination.page));
    url.searchParams.set("pagination[pageSize]", parseInt(pagination.pageSize));
  }
  if (filter.filterByContains) {
    Object.entries(filter).forEach(([key, value], index) => {
      if (key === "filterByContains" || !value.needle) return;
      url.searchParams.set(`filters[$or][${index}][${value.haystack}][$containsi]`, value.needle);
    });
  }
  return url.toString();
}
