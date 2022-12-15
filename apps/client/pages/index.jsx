import Hero from "../components/Hero";
import { homesCalls } from "../lib/homes";
import { renderRecentHomes } from "../components/homes/utils/renderRecentHomes";
import dynamic from "next/dynamic";
import Newsletter from "../components/landing/Newsletter";
import BackgroundImage from "../components/landing/BackgroundImage";
const GlbHomeRender = dynamic(() =>
  import("../components/homes/GlbHomeRender")
);
const Index = (props) => {
  return (
    <div>
      <BackgroundImage />
      <Hero />
      <Newsletter animationData={props.animationData} />
      <GlbHomeRender />

      <div className="recent-text">Recent Listings</div>
      <div
        className="pt-5 pb-1"
        style={{ width: "100%", textAlign: "center", margin: "auto" }}
      >{`Looking for a new home in Baltimore? Check out our recent auction listings to see some of the best properties on the market today. With a variety of homes available in different neighborhoods and at competitive prices, you're sure to find something that fits your needs. Don't miss out on these great opportunities, start browsing our listings now!`}</div>
      <div className="recent-homes-container">
        {renderRecentHomes(props.homes)}
      </div>
    </div>
  );
};
export const getStaticProps = async () => {
  const { data } = await homesCalls.get.recentHomes(3);
  const response = await fetch(
    "https://assets3.lottiefiles.com/packages/lf20_wbhpdrhp.json"
  );
  const animationData = await response.json();

  return {
    props: { homes: data, animationData },
    revalidate: 60,
  };
};
export default Index;
