import Home from "../../components/homes/Home";
import { homesCalls } from "../../lib/homes";
function renderHomes(homes) {
  return homes.map((home) => <Home key={home.id} home={home} />);
}
export default function Page({ homes }) {
  return (
    <>
      <div className="flex flex-row flex-wrap justify-center">
        {renderHomes(homes)}
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await homesCalls.get.allHomes();
  console.log(data);

  return {
    props: { homes: data },
    revalidate: 60,
  };
};
