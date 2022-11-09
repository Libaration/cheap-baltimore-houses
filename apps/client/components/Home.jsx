import { builder, Builder, BuilderComponent } from "@builder.io/react";
import { Text } from "@nextui-org/react";
import Image from "next/future/image";
import { cloudinaryLoader } from "../lib/cloudinaryLoader";
import { generateMarkdown } from "../lib/markDownMaker";
const HomeShow = ({ builderState }) => {
  const home = builderState?.state?.home?.data;
  const {
    street,
    street2,
    zip,
    state,
    city,
    cover_image,
    additional_images,
    description,
  } = home?.attributes;
  return (
    <div className="grid-container">
      <div className="home-hero">
        <Image
          loader={cloudinaryLoader}
          src={`${cover_image.data.attributes.hash}`}
          fill
          style={{ objectFit: "cover" }}
          alt="home"
        />
      </div>
      <div className="home-content">
        {street && city && state && zip && (
          <Text>{`${street} ${
            street2 ? street2 : ""
          } ${city}, ${state} ${zip}`}</Text>
        )}
        <Text size="small">{description}</Text>
      </div>
    </div>
  );
};

export default HomeShow;
Builder.registerComponent(HomeShow, {
  name: "HomeShow",
});
