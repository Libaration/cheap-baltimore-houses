import { useState, useEffect } from "react";
const PageSizeSelector = ({ setPage, setPageSize, pageSize }) => {
  const [clickedButton, setClickedButton] = useState(null);
  const onPageSizeChange = (eventChange) => {
    setPage(1);
    setPageSize(parseInt(eventChange.target.innerText));
    setClickedButton(eventChange.target);
  };
  useEffect(() => {
    if (clickedButton) {
      clickedButton.classList.add("pagination-button-clicked");

      setTimeout(() => {
        clickedButton.classList.remove("pagination-button-clicked");
        setClickedButton(null);
      }, 500);
    }
  }, [clickedButton]);
  return (
    <>
      <div className="flex flex-row">
        <button
          type="button"
          className="rounded-lg border px-3 py-1.5 text-center text-xs font-medium shadow-sm transition-all ml-2 mr-2 pagination-button"
          onClick={onPageSizeChange}
        >
          3
        </button>
        <button
          type="button"
          className="rounded-lg border px-3 py-1.5 text-center text-xs font-medium shadow-sm transition-all ml-2 mr-2 pagination-button"
          onClick={onPageSizeChange}
        >
          6
        </button>
        <button
          type="button"
          className="rounded-lg border px-3 py-1.5 text-center text-xs font-medium shadow-sm transition-all ml-2 mr-2 pagination-button"
          onClick={onPageSizeChange}
        >
          9
        </button>
      </div>
      <span className="filter-spans inline-block mt-2">{pageSize} Per Page</span>
    </>
  );
};
export default PageSizeSelector;
