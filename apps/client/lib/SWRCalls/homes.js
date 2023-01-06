import useSWR from "swr";
import { getStrapiURL } from "../api";

/**
 * @namespace homeAPI
 */

/**
 * A hook that retrieves all homes from the API.
 *
 * @param {Object} options - An options object with the following properties:
 * @param {Object} options.pagination - An object with the following properties:
 * @param {boolean} options.pagination.paginated - A boolean that determines whether or not pagination is enabled. If `true`, the `page` and `pageSize` properties are required.
 * @param {number} options.pagination.page - An integer that specifies the current page of homes to retrieve.
 * @param {number} options.pagination.pageSize - An integer that specifies the number of homes to retrieve per page.
 * @param {Object} options.filter - An object with the following properties:
 * @param {boolean} options.filter.filterByContains - A boolean that determines whether or not filtering is enabled. If `true`, the `needle` and `haystack` properties are required.
 * @param {string} options.filter.needle - A string that specifies the value to filter the homes by.
 * @param {string} options.filter.haystack - A string that specifies the field to filter the homes by.
 * @returns {Object} An object with the following properties:
 * @returns {Array} homes - An array of home objects.
 * @returns {boolean} isLoading - A boolean that indicates whether or not the homes are being loaded.
 * @returns {boolean} isError - A boolean that indicates whether or not there was an error loading the homes.
 * @example
 * import { useAllHomes } from './homes';
 *
 * const { homes, isLoading, isError } = useAllHomes({
 *   pagination: {
 *     paginated: true,
 *     page: 1,
 *     pageSize: 10
 *   },
 *   filter: {
 *     filterByContains: true,
 *     needle: '22902',
 *     haystack: 'zip'
 *   }
 * });
 *
 * @memberof homeAPI
 */

const fetcher = (...args) => fetch(...args).then((res) => res.json());
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

  const { data, error, isLoading } = useSWR(url, fetcher);
  return {
    homes: data,
    isLoading,
    isError: error,
  };
}

/**
 * @namespace homeAPI
 */

/**
 * A helper function that builds the API URL for retrieving the homes based on the provided options.
 *
 * @param {Object} options - An options object with the following properties:
 * @param {boolean} options.paginated - A boolean that determines whether or not pagination is enabled. If `true`, the `page` and `pageSize` properties are required.
 * @param {number} options.page - An integer that specifies the current page of homes to retrieve.
 * @param {number} options.pageSize - An integer that specifies the number of homes to retrieve per page.
 * @param {boolean} options.filterByContains - A boolean that determines whether or not filtering is enabled. If `true`, the `needle` and `haystack` properties are required.
 * @param {string} options.needle - A string that specifies the value to filter the homes by.
 * @param {string} options.haystack - A string that specifies the field to filter the homes by.
 * @returns {string} The API URL for retrieving the homes.
 * @example
 * import { getURL } from './homes';
 *
 * const url = getURL({
 *   paginated: true,
 *   page: 1,
 *   pageSize: 10,
 *   filterByContains: true,
 *   needle: '22902',
 *   haystack: 'zip'
 * });
 *
 * // Output: 'http://example.com/api/homes?populate=cover_image&pagination[page]=1&pagination[pageSize]=10&filters[zip][$contains]=22902'
 *
 * @memberof homeAPI
 */

function getURL({
  paginated,
  page,
  pageSize,
  filterByContains,
  needle,
  haystack,
}) {
  const baseURL = `${getStrapiURL("/api/homes")}`;
  const url = new URL(baseURL);

  url.searchParams.set("populate", "cover_image");

  if (paginated) {
    if (!page || !pageSize) {
      throw new Error(
        "The 'page' and 'pageSize' options are required when 'paginated' is true"
      );
    }
    url.searchParams.set("pagination[page]", page);
    url.searchParams.set("pagination[pageSize]", pageSize);
  } else {
    url.searchParams.set("pagination[page]", 1);
    url.searchParams.set("pagination[pageSize]", 9);
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
