import NavBar from "../components/NavBar";
import { Button } from "primereact/button";
import { useRef } from "react";
import { useParallax, Parallax } from "react-scroll-parallax";
import Image from "next/future/image";
import logo from "../public/logo.png";
import cityOverlay from "../public/city.png";
import skyOverlay from "../public/sky.png";
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
    easing: "easeInOutCirc",
  });

  const city = useParallax({
    opacity: [0, 1],
    shouldAlwaysCompleteAnimation: true,
    startScroll: 0,
    endScroll: 400,
    easing: "easeInOutSine",
  });

  const setStyle = (element, style) => {
    if (element) {
      element["el"]["style"][`${style}`] = element.progress * 100 + "%";
    }
  };

  // const navBar = useParallax({
  //   // translateY: ["42vh", "0vh"],
  //   // onChange: (element) => {
  //   //   setStyle(element, "width");
  //   // },
  //   // scale: [0, 1],
  //   // opacity: [0, 1],
  //   // startScroll: 200,
  //   // endScroll: 900,
  //   // easing: "easeInOutCubic",
  //   // shouldAlwaysCompleteAnimation: true,
  //   // target: target.current,
  // });

  return (
    <>
      <div className="main">
        <div ref={sky.ref} className="sky">
          <Image
            src={skyOverlay}
            alt=""
            fill={true}
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>
        <div ref={city.ref} className="city">
          <Image
            src={cityOverlay}
            alt=""
            fill={true}
            style={{ objectFit: "cover" }}
            priority={true}
          />
        </div>

        <div className="section">
          <div className="text-center" ref={text.ref} style={{ zIndex: 3 }}>
            <h4 className="smallHeroText" ref={target}>
              Cheap Baltimore Houses
            </h4>
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
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </div>
        <div className="section" id="#next">
          <h1>MORE STUFF I GUESS</h1>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
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
