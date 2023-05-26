import { Pagination } from "@nextui-org/react";
const PagePagination = ({ meta, setPage, page }) => {
  return (
    <div className="flex items-center mt-5 mb-5 flex-col">
      <Pagination
        total={meta.pagination.pageCount} // confusing variable names here but in this case total is the total number of pages aka pageCount
        page={page}
        size="xs"
        color={"gradient"}
        controls={false}
        onChange={(chosenPage) => {
          setPage(chosenPage);
        }}
      />
      <span className="text-xs mt-1 " style={{ color: "#333333" }}>
        Page {meta.pagination.page} of {meta.pagination.pageCount}
      </span>
    </div>
  );
};
export default PagePagination;
