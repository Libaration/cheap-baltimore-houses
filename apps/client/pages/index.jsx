import Hero from "../components/Hero";
import { homesCalls } from "../lib/homes";
import { renderRecentHomes } from "../components/homes/utils/renderRecentHomes";
import dynamic from "next/dynamic";
import Newsletter from "../components/landing/Newsletter";
import { Button } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import { useChangeNotchColor } from "../lib/useCustomHooks";
import Link from "next/link";
import Head from "next/head";
import {
  useResizeEffect,
  useInViewStateAndEffect,
} from "../lib/useCustomHooks";
const GlbHomeRender = dynamic(() =>
  import("../components/homes/GlbHomeRender")
);
const Index = (props) => {
  const recentHomesRef = useRef(null);
  const { notchColor, setNotchColor } = useChangeNotchColor();
  const { ref: newsletterRef, isVisible: newsletterVisible } =
    useInViewStateAndEffect(0.1, "news");
  const { ref: heroRef, isVisible: heroVisible } = useInViewStateAndEffect(
    0.1,
    "hero"
  );
  const { ref: contentRef, isVisible: contentVisible } =
    useInViewStateAndEffect(0.1, "content");

  useResizeEffect();
  useEffect(() => {
    if (
      (!heroVisible && newsletterVisible && contentVisible) ||
      (heroVisible && !newsletterVisible && !contentVisible)
    ) {
      setNotchColor({ theme: "#161724", style: "black-translucent" });
    }
    if (
      (newsletterVisible && !contentVisible && !heroVisible) ||
      (!newsletterVisible && !contentVisible && !heroVisible)
    ) {
      setNotchColor({ theme: "#cb9040", style: "translucent" });
    }
  }, [newsletterVisible, heroVisible, contentVisible, setNotchColor]);

  return (
    <>
      <Head>
        <meta name="theme-color" content={notchColor.theme} />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={notchColor.style}
        />
      </Head>
      <div ref={heroRef}>
        <Hero recentHomesRef={recentHomesRef} />
        <div ref={contentRef} style={{ width: "1px", height: "1px" }} />
      </div>
      <div className="shrink center-safe">
        <Newsletter
          animationData={props.animationData}
          ref={newsletterRef}
          visible={newsletterVisible}
        />

        <div
          className="w-full overflow-visible"
          style={{
            position: "relative",
            zIndex: 1,
            height: "600px",
            marginTop: "-100px",
          }}
        >
          <GlbHomeRender />
        </div>

        <div className="recent-text" ref={recentHomesRef}>
          Recent Listings
        </div>
        <div
          className="pt-5 pb-5"
          style={{ width: "100%", textAlign: "center", margin: "auto" }}
        >{`Looking for a new home in Baltimore? Check out our recent auction listings to see some of the best properties on the market today. With a variety of homes available in different neighborhoods and at competitive prices, you're sure to find something that fits your needs. Don't miss out on these great opportunities, start browsing our listings now!`}</div>
        <div className="flex justify-center">
          <Button color="warning">
            <Link href="/homes">
              <a>View All Listings</a>
            </Link>
          </Button>
        </div>
        <div className="recent-homes-container">
          {renderRecentHomes(props.homes)}
        </div>
      </div>
    </>
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
