import { Button } from "primereact/button";
import { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import Image from "next/future/image";
import cityOverlay from "../public/city.png";
import skyOverlay from "../public/sky.png";
const Hero = (props) => {
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
                  if (props.recentHomesRef.current) {
                    props.recentHomesRef.current.scrollIntoView({
                      behavior: "smooth",
                    });
                  }
                }}
              />
            </div>
          </div>
        </div>
        {props.children}
      </div>
    </>
  );
};
export default Hero;
