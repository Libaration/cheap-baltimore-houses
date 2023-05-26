import { Button } from "primereact/button";
import { useRef } from "react";
import { useParallax } from "react-scroll-parallax";
import Image from "next/future/image";
import cityOverlay from "../public/city.webp";
import skyOverlay from "../public/sky.webp";
const Hero = (props) => {
  const target = useRef(null);
  const text = useParallax({
    speed: 10,
    target: target.current,
  });

  return (
    <>
      <div className="main">
        <div className="section">
          <div ref={text.ref} style={{ zIndex: 3 }}>
            <h4 className="smallHeroText " ref={target} style={{ color: "white" }}>
              Cheap Baltimore Houses
            </h4>
            <h1 className="heroText">Buying property</h1>
            <h1 className="heroText">
              has <span style={{ color: "#ff4081" }}>never </span>
              <span style={{ color: "#e3af5b" }}>been</span>
              <span style={{ color: "#00b0ff" }}> easier.</span>
            </h1>

            <div className="mt-5 see-properties-container">
              <Button
                className="seeOurPropertiesButton"
                label="See our properties"
                onClick={() => {
                  console.log("out");
                  if (props.recentHomesRef.current) {
                    console.log("sdsdsdsdsds");
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
