import { homesCalls } from "../../../lib/homes";
import Home from "../Home";
import ContentLoader from "react-content-loader";
import { useCallback } from "react";
import { v4 as uuidv4 } from "uuid";
import { useState, useEffect } from "react";
import HomesPagination from "../HomesPagination";
import HomesFilter from "../HomesFilter";
/*
    I created the meta state to be able to pass it down to the HomesFilter and HomesPagination components.
    but, when I pass it down everything gets weird. 
    So, I'm passing the SWR results directly. 
    I guess when I set the meta state, it triggers a re-render and the SWR gets re-fetched?
    and then that passes the meta results directly to the HomesFilter and HomesPagination components again?
    This is all coded in such a way that if anything changes.
    Everything will break. I have no idea what kind of circular logic I've created here.
*/
const skeleton = () => {
  return Array.from({ length: 9 }).map((_, i) => (
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
};
const Homes = () => {
  const [meta, setMeta] = useState({});
  const { data, isLoading } = homesCalls.getSWR.allHomesPaginated({
    page: meta.pagination && meta.pagination.page,
    pageSize: meta.pagination && meta.pagination.pageSize,
  });
  const renderHomes = useCallback((homes) => {
    return homes.map((home) => <Home key={home.id} home={home} />);
  }, []);

  useEffect(() => {
    setMeta(data.meta);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <HomesFilter meta={data.meta} setMeta={setMeta} />
      <div className="flex flex-row flex-wrap justify-center">
        {isLoading ? skeleton() : renderHomes(data.data)}
      </div>
      <HomesPagination meta={data.meta} setMeta={setMeta} />
    </>
  );
};
export default Homes;
