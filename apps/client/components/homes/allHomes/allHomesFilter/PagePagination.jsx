import { Pagination } from "@nextui-org/react";
import { useEffect, useRef, useMemo } from "react";
const PagePagination = ({ page, pageCount, pageSize, total, setPage, setPageSize, totalState }) => {
  if (page > pageCount) setPage(1);
  return (
    <div className="flex items-center mt-5 mb-5 flex-col">
      <Pagination
        total={pageCount} // confusing variable names here but in this case total is the total number of pages aka pageCount
        page={page}
        initialPage={page}
        color="warning"
        size="sm"
        controls={false}
        onChange={(page) => {
          setPage(page);
        }}
      />
      <span className="text-xs mt-1 text-secondary-800">
        Page {page} of {pageCount}
      </span>
    </div>
  );
};
export default PagePagination;
