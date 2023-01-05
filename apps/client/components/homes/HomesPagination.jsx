import { Pagination } from "@nextui-org/react";
import { homesCalls } from "../../lib/homes";
import { useSWRAllHomesPaginated } from "../../lib/homes";
const HomesPagination = ({ meta, setHomes, setMeta }) => {
  console.log(meta);
  return (
    <div className="flex items-center mt-5 mb-5 flex-col">
      <Pagination
        total={meta && meta.pagination && meta.pagination.pageCount}
        initialPage={meta && meta.pagination && meta.pagination.page}
        color="warning"
        size="sm"
        controls={false}
        onChange={async (page) => {
          setMeta({ ...meta, pagination: { ...meta.pagination, page } });
        }}
      />
      <span className="text-xs mt-1 text-secondary-800">
        Page {meta && meta.pagination && meta.pagination.page} of{" "}
        {meta && meta.pagination && meta.pagination.pageCount}
      </span>
    </div>
  );
};
export default HomesPagination;
