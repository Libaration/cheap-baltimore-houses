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
      needle: "",
      haystack: "",
    },
  };
  const {
    pagination: { paginated, page, pageSize },
    filter: { filterByContains, needle, haystack },
  } = {
    ...defaultOptions,
    ...options,
  };
  const url = getURL({
    paginated,
    page,
    pageSize,
    filterByContains,
    needle,
    haystack,
  });
  const { data, error, isLoading, mutate } = useSWR(url, fetcher);
  return {
    homes: data,
    isLoading,
    isError: error,
  };
}

function getURL({ paginated, page, pageSize, filterByContains, needle, haystack }) {
  const baseURL = `${getStrapiURL("/api/homes")}`;
  const url = new URL(baseURL);
  url.searchParams.set("populate", "cover_image");
  url.searchParams.set("sort", "id:DESC");
  if (!paginated && !filterByContains) return url.toString();
  if (paginated) {
    if (!page || !pageSize) {
      throw new Error("The 'page' and 'pageSize' options are required when 'paginated' is true");
    }
    url.searchParams.set("pagination[page]", parseInt(page));
    url.searchParams.set("pagination[pageSize]", parseInt(pageSize));
  }

  if (filterByContains) {
    if (!needle || !haystack) {
      throw new Error(
        "The 'needle' and 'haystack' options are required when 'filterByContains' is true"
      );
    }
    url.searchParams.set(`filters[${haystack}][$contains]`, needle);
  }
  return url.toString();
}
