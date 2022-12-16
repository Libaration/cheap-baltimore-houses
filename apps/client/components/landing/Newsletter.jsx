import Lottie from "react-lottie";
import { useRef, useEffect, forwardRef } from "react";
const Newsletter = (props, ref) => {
  const lottieRef = useRef(null);
  return (
    <div ref={ref} className="newsletter-container">
      <div
        className={`newsletter-icon ${
          props.visible ? "scale-in" : "scale-out"
        }`}
      >
        <Lottie
          options={{
            animationData: props.animationData,
            autoplay: false,
            loop: false,
          }}
          isClickToPauseDisabled={true}
          ref={lottieRef}
          style={{
            height: "200px",
            width: "200px",
          }}
        />
      </div>
      <div className="newsletter-text p-5 text-white">
        Join our newsletter and stay up to date with all of our listings
      </div>
    </div>
  );
};

export default forwardRef(Newsletter);
