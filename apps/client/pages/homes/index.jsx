import Home from "../../components/homes/Home";
import { homesCalls } from "../../lib/homes";
import Breadcrumb from "../../components/Breadcrumb";
import HomesFilter from "../../components/homes/HomesFilter";
import HomesPagination from "../../components/homes/HomesPagination";
import { useState } from "react";
function renderHomes(homes) {
  return homes.map((home) => <Home key={home.id} home={home} />);
}
export default function Page({ homes, meta }) {
  const [homesState, setHomesState] = useState(null);
  return (
    <>
      <Breadcrumb />

      <HomesFilter meta={meta} />

      <h4 className="smallHeroText text-center">Cheap Baltimore Houses</h4>

      <div className="flex flex-row flex-wrap justify-center">
        {renderHomes(homesState ? homesState : homes)}
      </div>
      <HomesPagination meta={meta} setHomesState={setHomesState} />
    </>
  );
}

export const getStaticProps = async () => {
  const response = await homesCalls.get.allHomesPaginated({
    page: 1,
    pageSize: 2,
  });

  return {
    props: { homes: response.data, meta: response.meta },
    revalidate: 60,
  };
};
