import React from "react";
import Image from "next/future/image";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
const NextJsImage = ({
  imageProps: { src, alt, title, sizes, className, onClick },
  wrapperStyle,
}) => (
  <div style={wrapperStyle}>
    <div
      style={{
        display: "block",
        position: "relative",
        width: "100%",
        height: "100%",
      }}
    >
      <Image
        loader={cloudinaryLoader}
        fill
        src={src}
        alt={alt}
        title={title}
        sizes="(max-width: 576px) 100vw,
                          (max-width: 768px) 50vw,
                          (max-width: 992px) 33vw,
                          (max-width: 1200px) 25vw,
                          20vw"
        className={className}
        onClick={onClick}
      />
    </div>
  </div>
);

export default NextJsImage;
