import Lottie from "react-lottie";
import { useRef } from "react";

const Newsletter = (props) => {
  const lottieRef = useRef(null);

  return (
    <div
      className="newsletter-container scale-up-center"
      onMouseEnter={() => {
        if (lottieRef.current) lottieRef.current.play();
      }}
      onMouseLeave={() => {
        if (lottieRef.current) lottieRef.current.stop();
      }}
    >
      <div className="newsletter-icon">
        <Lottie
          options={{
            animationData: props.animationData,
            autoplay: false,
            loop: false,
          }}
          isClickToPauseDisabled={true}
          ref={lottieRef}
          style={{ height: "200px", width: "200px" }}
        />
      </div>
      <div className="newsletter-text p-5 text-white">
        Join our newsletter and stay up to date with all of our listings
      </div>
    </div>
  );
};

export default Newsletter;
