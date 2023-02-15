import { useAllHomes } from "../../../lib/SWRCalls/homes";
import LoadingSkeleton from "./LoadingSkeleton";
import Home from "../Home";
import { Accordion, FilterZipcodeInput, PagePagination, PageSizeSelector } from "./allHomesFilter";
function Homes({ page, setPage, pageSize, setPageSize, zipcode, setZipcode }) {
  const options = zipcode
    ? {
        pagination: { paginated: true, page: page, pageSize: pageSize },
        filter: { filterByContains: true, needle: zipcode, haystack: "zip" },
      }
    : {
        pagination: { paginated: true, page: page, pageSize: pageSize },
      };
  const { homes, isLoading, isError } = useAllHomes(options);
  const renderHomes = () => {
    if (isLoading || !homes) return <LoadingSkeleton />;
    if (isError) return <p>There was an error loading the homes.</p>;
    // if(homes && homes.meta.pagination.pageCount < page) return <p>There are no more homes to display.</p>
    if (homes && homes.data) {
      return (
        <div className="flex flex-row flex-wrap justify-center">
          {homes.data.map((home) => (
            <Home key={home.id} home={home} />
          ))}
        </div>
      );
    }
  };

  return (
    <>
      <Accordion>
        <FilterZipcodeInput setZipcode={setZipcode} setPage={setPage} />
        <PageSizeSelector
          {...homes}
          pageSize={pageSize}
          setPageSize={setPageSize}
          setPage={setPage}
        />
      </Accordion>
      {homes && homes.data.length <= 0 ? (
        <p className="text-center pt-5">No listings found.</p>
      ) : (
        renderHomes()
      )}
      {homes.data.length > 0 && <PagePagination {...homes} page={page} setPage={setPage} />}
    </>
  );
}
export default Homes;
