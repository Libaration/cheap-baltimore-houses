const PageSizeDropdown = () => {
  return (
    <>
      <div className="flex flex-row">
        <button
          type="button"
          className="rounded-lg border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 ml-2 mr-2"
          onClick={() => console.log("")}
        >
          3
        </button>
        <button
          type="button"
          className="rounded-lg border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 ml-2 mr-2"
          onClick={() => console.log("")}
        >
          6
        </button>
        <button
          type="button"
          className="rounded-lg border border-primary-500 bg-primary-500 px-3 py-1.5 text-center text-xs font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300 ml-2 mr-2"
          onClick={() => console.log("")}
        >
          9
        </button>
      </div>
      <span className="filter-spans inline-block mt-2">9 Per Page</span>
    </>
  );
};
export default PageSizeDropdown;
