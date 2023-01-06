import Link from "next/link";
const HomesFilterDropdown = ({ meta, setMeta }) => {
  return (
    <div className="flex flex-row">
      <button
        type="button"
        className="rounded-lg border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 ml-2 mr-2"
        onClick={() => setMeta({ ...meta, pagination: { ...meta.pagination, pageSize: 3 } })}
      >
        3
      </button>
      <button
        type="button"
        className="rounded-lg border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 ml-2 mr-2"
        onClick={() => setMeta({ ...meta, pagination: { ...meta.pagination, pageSize: 6 } })}
      >
        6
      </button>
      <button
        type="button"
        className="rounded-lg border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 ml-2 mr-2"
        onClick={() => setMeta({ ...meta, pagination: { ...meta.pagination, pageSize: 9 } })}
      >
        9
      </button>
    </div>
  );
};
export default HomesFilterDropdown;
