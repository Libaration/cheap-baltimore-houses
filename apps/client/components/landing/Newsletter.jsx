import Lottie from "react-lottie";
import { useRef, forwardRef } from "react";
import { translatedCopy } from "../../lib/util/translatedCopy";
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
        className={`newsletter-text p-5 text-white ${
          props.visible ? "scale-in" : "scale-out"
        }`}
      >
        {translatedCopy("components.landing.newsletter.heading")}
      </div>
      <div className="newsletter-sign-up-form">
        MORE STUFFsdksdskndksndksndksndksndksndksndknskdnskd
        <br />
        sdnksdnskdnskdnksndksdnk
        <br />
        dfmdkfnkednkndkndns
        <br />
        dfnkdfnkdfnkdnfkssdsdsdsdsdsdssds
      </div>
    </div>
  );
};

export default forwardRef(Newsletter);
