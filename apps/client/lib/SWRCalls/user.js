import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());
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
