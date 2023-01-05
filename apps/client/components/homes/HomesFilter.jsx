import HomesFilterDropdown from "./HomesFilterDropdown";
import { Dropdown } from "@nextui-org/react";
const HomesFilter = ({ meta, setMeta }) => {
  return (
    <div className="flex justify-center mt-10">
      <details className="group rounded-lg p-6 open:bg-gray-700 w-96 bg-gray-700">
        <summary className="flex cursor-pointer list-none items-center justify-between text-lg font-medium text-secondary-100">
          Filters
          <div className="text-primary-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="block h-5 w-5 group-open:hidden"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="hidden h-5 w-5 group-open:block"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
        </summary>
        <div className="mt-2 text-secondary-200 text-xs">
          <HomesFilterDropdown meta={meta} setMeta={setMeta} />
          <span className="filter-spans">
            {meta.pagination && meta.pagination.pageSize} Per Page
          </span>
        </div>
      </details>
    </div>
  );
};
export default HomesFilter;
