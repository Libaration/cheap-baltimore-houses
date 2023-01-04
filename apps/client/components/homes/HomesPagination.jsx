import { Pagination } from "@nextui-org/react";
import { homesCalls } from "../../lib/homes";
import { useSWRAllHomesPaginated } from "../../lib/homes";
const HomesPagination = ({ meta, setHomes, setMeta }) => {
  return (
    <div className="flex items-center mt-10 flex-col">
      <Pagination
        total={meta.pagination && meta.pagination.pageCount}
        initialPage={meta.pagination && meta.pagination.page}
        color="warning"
        size="sm"
        controls={false}
        onChange={async (page) => {
          setMeta({ ...meta, pagination: { ...meta.pagination, page } });
        }}
      />
      <span className="text-xs mt-1 text-secondary-800">
        Page {meta.pagination && meta.pagination.page} of{" "}
        {meta.pagination && meta.pagination.pageCount}
      </span>
    </div>
  );
};
export default HomesPagination;
