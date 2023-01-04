import { homesCalls } from "../../../lib/homes";
import Home from "../Home";
import ContentLoader from "react-content-loader";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import HomesPagination from "../HomesPagination";
const skeleton = () => {
  const skeletons = Array.from({ length: 9 }).map((_, i) => (
    <ContentLoader
      key={uuidv4()}
      viewBox="0 0 500 280"
      height={430}
      width={445}
    >
      <rect x="50" y="3" rx="10" ry="10" width="390" height="180" />
      <rect x="55" y="190" rx="0" ry="0" width="292" height="20" />
      <rect x="65" y="215" rx="0" ry="0" width="239" height="20" />
      <rect x="65" y="242" rx="0" ry="0" width="274" height="20" />
    </ContentLoader>
  ));
  return skeletons;
};
const Homes = () => {
  const [meta, setMeta] = useState({});
  const { data, isLoading, isError } = homesCalls.getSWR.allHomesPaginated({
    page: meta.pagination && meta.pagination.page,
    pageSize: meta.pagination && meta.pagination.pageSize,
  });
  const renderHomes = useCallback((homes) => {
    return homes.map((home) => <Home key={home.id} home={home} />);
  }, []);
  console.log(meta.pagination);

  useEffect(() => {
    setMeta(data.meta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {isLoading ? skeleton() : renderHomes(data.data)}
      </div>
      <HomesPagination meta={meta} setMeta={setMeta} />
    </>
  );
};
export default Homes;
