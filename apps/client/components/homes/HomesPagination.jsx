import { Pagination } from "@nextui-org/react";
import { homesCalls } from "../../lib/homes";
const HomesPagination = ({ meta, setHomesState }) => {
  const { page, pageCount } = meta.pagination;
  return (
    <div className="flex items-center mt-10 flex-col">
      <Pagination
        total={pageCount}
        initialPage={page}
        color="warning"
        size="sm"
        controls={false}
        onChange={async (page) => {
          const response = await homesCalls.get.allHomesPaginated({
            page: page,
            pageSize: 2,
          });
          setHomesState(response.data);
        }}
      />
      <span className="text-xs text-primary-100 mt-1">
        Page {page} of {pageCount}
      </span>
    </div>
  );
};
export default HomesPagination;
