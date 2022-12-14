import { builder, Builder, BuilderComponent } from "@builder.io/react";
import { Card, Grid, Text } from "@nextui-org/react";
import Image from "next/future/image";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
import { useEffect, useState } from "react";
import { generateMarkdown } from "../../lib/markDownMaker";
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
  const [descriptionState, setDescriptionState] = useState(description);
  useEffect(() => {
    setDescriptionState(generateMarkdown(description));
  }, [description]);

  return (
    <div className="home-container">
      <div></div>
    </div>
  );
};

export default HomeShow;
Builder.registerComponent(HomeShow, {
  name: "HomeShow",
});
