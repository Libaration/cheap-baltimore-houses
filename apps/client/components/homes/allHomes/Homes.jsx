import { useAllHomes } from "../../../lib/SWRCalls/homes";
import { useState } from "react";
import LoadingSkeleton from "./LoadingSkeleton";
import Home from "../Home";
import { Accordion, FilterZipcodeInput, PageSizeDropdown } from "./allHomesFilter";
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
          pageSize: 9,
        },
      };
  const { homes, isLoading, isError } = useAllHomes(options);
  const renderHomes = () => {
    if (isLoading) return <LoadingSkeleton />;
    if (isError) return <p>There was an error loading the homes.</p>;
    return (
      <div className="flex flex-row flex-wrap justify-center">
        {homes.data.map((home) => (
          <Home key={home.id} home={home} />
        ))}
      </div>
    );
  };

  return (
    <>
      <Accordion>
        <FilterZipcodeInput setZipcode={setZipcode} />
        <PageSizeDropdown />
      </Accordion>
      {renderHomes()}
    </>
  );
}
export default Homes;
