import NavBar from "../components/NavBar";
import { Button } from "primereact/button";
import { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import Image from "next/future/image";
import logo from "../public/logo.png";
export default function Index(props) {
  const page2Ref = useRef(null);
  const target = useRef(null);
  const text = useParallax({
    speed: 10,
    target: target.current,
  });
  const sky = useParallax({
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    startScroll: 0,
    endScroll: 200,
  });

  const city = useParallax({
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    startScroll: 0,
    endScroll: 200,
  });

  const setWidth = (element) => {
    if (element) {
      console.log(element);
      element.el.style.width = element.progress * 100 + "%";
    }
  };

  const navBar = useParallax({
    translateY: ["42vh", "0vh"],
    onChange: (element) => {
      setWidth(element);
    },
    scale: [0, 1],
    opacity: [0, 1],
    startScroll: 300,
    endScroll: 800,
    shouldAlwaysCompleteAnimation: true,
    target: target.current,
  });
  const css = { width: "auto", height: "auto" };
  return (
    <>
      <NavBar navBarRef={navBar.ref} />
      <div className="main" ref={target}>
        <img className="sky brightness" src="/sky.png" alt="" ref={sky.ref} />
        <img className="city" src="/city.png" alt="" ref={city.ref} />
        <div className="section">
          <div className="text-center" ref={text.ref} style={{ zIndex: 10 }}>
            <h4 className="smallHeroText">Cheap Baltimore Houses</h4>
            <h1 className="heroText">Buying property</h1>
            <h1 className="heroText">has never been easier.</h1>
            <div className="mt-5">
              <Button
                className="seeOurPropertiesButton"
                label="See our properties"
                onClick={() => {
                  page2Ref.current?.scrollIntoView({ behavior: "smooth" });
                }}
              />
            </div>
          </div>
        </div>

        <div className="section homesSection" id="#next" ref={page2Ref}>
          <h1>MORE STUFF I GUESS</h1>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const fetchHomes = await fetch("http://localhost:1337/api/homes?populate=*");
  const response = await fetchHomes.json();
  const { data } = response;
  return { props: { data } };
}
