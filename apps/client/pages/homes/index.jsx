import Home from "../../components/homes/Home";
import { homesCalls } from "../../lib/homes";
import Breadcrumb from "../../components/Breadcrumb";
function renderHomes(homes) {
  return homes.map((home) => <Home key={home.id} home={home} />);
}
export default function Page({ homes }) {
  return (
    <>
      <Breadcrumb />
      <h4 className="smallHeroText text-center">Cheap Baltimore Houses</h4>

      <div className="flex flex-row flex-wrap justify-center">
        {renderHomes(homes)}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await homesCalls.get.allHomes();

  return {
    props: { homes: data },
    revalidate: 60,
  };
};
