import Hero from "../components/Hero";
import { homesCalls } from "../lib/homes";
import { renderRecentHomes } from "../components/homes/utils/renderRecentHomes";
import CategoriesSection from "../components/landing/CategoriesSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import HomeSection from "../components/landing/HomeSection";
import EasySection from "../components/landing/EasySection";
import ReviewSection from "../components/landing/ReviewSection";
import { Button } from "@nextui-org/react";
import { useEffect, useRef } from "react";
import { useChangeNotchColor } from "../lib/useCustomHooks";
import Link from "next/link";
import Head from "next/head";
import { useResizeEffect, useInViewStateAndEffect } from "../lib/useCustomHooks";
import { Fade, Slide } from "react-awesome-reveal";
import { Parallax } from "react-scroll-parallax";
const Index = (props) => {
  const recentHomesRef = useRef(null);
  const { notchColor, setNotchColor } = useChangeNotchColor();
  const { ref: newsletterRef, isVisible: newsletterVisible } = useInViewStateAndEffect(0.1, "news");
  const { ref: heroRef, isVisible: heroVisible } = useInViewStateAndEffect(0.1, "hero");
  const { ref: contentRef, isVisible: contentVisible } = useInViewStateAndEffect(0.1, "content");

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
      setNotchColor({ theme: "#B91C1C", style: "translucent" });
    }
  }, [newsletterVisible, heroVisible, contentVisible, setNotchColor]);

  return (
    <>
      <Head>
        <meta name="theme-color" content={notchColor.theme} />
        <meta name="apple-mobile-web-app-status-bar-style" content={notchColor.style} />
      </Head>
      <div ref={heroRef}>
        <Hero recentHomesRef={recentHomesRef} />
        <div ref={contentRef} style={{ width: "1px", height: "0px" }} />
      </div>

      <div
        className="items-center justify-center pt-8"
        style={{ height: "100vh", backgroundColor: "#B91C1C" }}
      >
        <Parallax translateY={["0vh", "5vh"]}>
          <HomeSection />
        </Parallax>
      </div>

      <div className="shrink center-safe">
        {/* <Newsletter
          animationData={props.animationData}
          ref={newsletterRef}
          visible={newsletterVisible}
        /> */}

        <Slide direction="left" triggerOnce>
          <Parallax translateY={["-10vh", "0vh"]}>
            <HowItWorksSection />
          </Parallax>
        </Slide>

        {/* <Slide direction="right" triggerOnce>
          <CategoriesSection />
        </Slide> */}
        <div ref={recentHomesRef}></div>
        <Slide direction="right" triggerOnce cascade damping={0.1}>
          <Parallax translateY={["-10vh", "5vh"]}>
            <div className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Recent Listings
              </h1>
            </div>

            <p className="mb-8 leading-relaxed">{`Looking for a new home in Baltimore? Check out our recent auction listings to see some of the best properties on the market today. With a variety of homes available in different neighborhoods and at competitive prices, you're sure to find something that fits your needs. Don't miss out on these great opportunities, start browsing our listings now!`}</p>

            <div className="recent-homes-container">
              <Fade cascade damping={0.3} triggerOnce>
                {renderRecentHomes(props.homes)}
              </Fade>
            </div>

            <div className="flex justify-center px-5 pt-5 pb-20 mx-auto">
              <div className="recent-homes-button">
                <Link href={"/homes"}>
                  <button className="inline-flex border-0 py-2 px-6 focus:outline-none hover:bg-[#333333] a:[text-black] duration-300 rounded text-lg">
                    View All Listings
                  </button>
                </Link>
              </div>
            </div>
          </Parallax>
        </Slide>
        <div className="additionalContent">
          <ReviewSection />
          <EasySection />
        </div>
      </div>
    </>
  );
};
export const getStaticProps = async () => {
  const { data } = await homesCalls.get.recentHomes(3);
  const response = await fetch("https://assets3.lottiefiles.com/packages/lf20_wbhpdrhp.json");
  const animationData = await response.json();

  return {
    props: { homes: data, animationData },
    revalidate: 60,
  };
};
export default Index;
