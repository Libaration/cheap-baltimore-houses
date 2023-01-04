import Lottie from "react-lottie";
import { useRef, forwardRef } from "react";
import { translatedCopy } from "../../lib/util/translatedCopy";
import SignUpForm from "../newsletter/SignUpForm";
const Newsletter = (props, ref) => {
  const lottieRef = useRef(null);
  return (
    <div
      className="newsletter-container"
      style={{
        zIndex: 2,
        position: "relative",
        maxWidth: "100%",
        overflowWrap: "break-word",
      }}
    >
      <div ref={ref}>
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
      </div>
      <div
        className={`newsletter-text p-5  ${
          props.visible ? "scale-in" : "scale-out"
        }`}
      >
        {translatedCopy("components.landing.newsletter.heading")}
      </div>
      <div className="newsletter-sign-up-form">
        <SignUpForm />
      </div>
    </div>
  );
};

export default forwardRef(Newsletter);
