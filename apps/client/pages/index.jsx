import Hero from "../components/Hero";
import { homesCalls } from "../lib/homes";
import { renderRecentHomes } from "../components/homes/utils/renderRecentHomes";
const Index = (props) => {
  return (
    <div>
      <Hero />
      <div className="recent-homes-container">
        {renderRecentHomes(props.homes)}
      </div>
    </div>
  );
};
export const getStaticProps = async () => {
  const { data } = await homesCalls.get.recentHomes(3);

  return {
    props: { homes: data },
    revalidate: 60,
  };
};
export default Index;
