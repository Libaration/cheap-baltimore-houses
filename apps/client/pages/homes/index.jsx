import { homesCalls } from "../../lib/homes";
import Breadcrumb from "../../components/Breadcrumb";
import HomesFilter from "../../components/homes/HomesFilter";
import { SWRConfig } from "swr";
import dynamic from "next/dynamic";
const Homes = dynamic(() => import("../../components/homes/allHomes/Homes"), {
  ssr: false,
});
export default function Page({ fallback }) {
  const { meta } = fallback;

  return (
    <SWRConfig value={{ fallbackData: fallback }}>
      <Breadcrumb />

      <h4 className="smallHeroText text-center">Cheap Baltimore Houses</h4>

      <Homes />
    </SWRConfig>
  );
}

export const getStaticProps = async () => {
  const response = await homesCalls.get.allHomesPaginated({
    page: 1,
    pageSize: 9,
  });

  return {
    props: {
      fallback: {
        data: response.data,
        meta: response.meta,
      },
    },
    revalidate: 60,
  };
};
