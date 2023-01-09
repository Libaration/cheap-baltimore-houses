import useSWR from "swr";
const fetcher = (...args) => fetch(...args).then((res) => res.json());
export function useCheckEmail(shouldCheck, email) {
  const { data, error, isLoading } = useSWR(
    shouldCheck ? `https://open.kickbox.com/v1/disposable/${email}` : null,
    fetcher
  );
  return {
    data,
    isLoading,
    isError: error,
  };
}
