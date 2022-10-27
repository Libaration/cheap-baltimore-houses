import { Button } from "primereact/button";
import { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import Image from "next/future/image";
import cityOverlay from "../public/city.png";
import skyOverlay from "../public/sky.png";
import { Builder } from "@builder.io/react";
export default function Hero({ children }) {
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
        {children}
      </div>
    </>
  );
}
Builder.registerComponent(Hero, {
  name: "Hero",
});
