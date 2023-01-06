import { useAllHomes } from "../../../lib/SWRCalls/homes";
import { useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import Home from "../Home";
function Homes() {
  const [zipcode, setZipcode] = useState("");
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(9);
  const options = zipcode
    ? { filter: { filterByContains: true, needle: zipcode, haystack: "zip" } }
    : {
        pagination: {
          paginated: true,
          page: 1,
          pageSize: 3,
        },
      };
  const { homes, isLoading, isError } = useAllHomes(options);
  const renderHomes = isLoading ? (
    <LoadingSkeleton />
  ) : (
    homes.data.map((home) => <Home key={home.id} home={home} />)
  );

  return <div className="flex flex-row flex-wrap justify-center">{renderHomes}</div>;
}
export default Homes;
