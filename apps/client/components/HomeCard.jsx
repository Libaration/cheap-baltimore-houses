import { builder, Builder } from "@builder.io/react";
import { Card, Text } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import Image from "next/future/image";
import { Button } from "primereact/button";
import Link from "next/link";
import { cloudinaryLoader } from "../lib/cloudinaryLoader";
export async function getStaticProps() {
  const placeholder = await builder
    .get(
      "maxWidth",
      "minHeight",
      "width",
      "address",
      "description",
      "image",
      "homeId",
      {
        // You can use options for queries, sorting, and targeting here
        // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
      }
    )
    .promise();
  return {
    props: {
      maxWidth: maxWidth || null,
      minHeight: minHeight || null,
      width: width || null,
      address: address || "No address",
      description: description || "No description",
      image: image || null,
      homeId: homeId || null,
    },
    revalidate: 5,
  };
}

const HomeCard = (props) => {
  useEffect(() => {
    setDescription(<ReactMarkdown>{props.description}</ReactMarkdown>);
  }, [props.description]);
  const [description, setDescription] = useState(props.description);
  return (
    <div className="home-card p-3">
      <Card
        css={{
          mw: `${props.maxWidth}`,
          minHeight: `${props.minHeight}`,
          width: `${props.width} !important`,
          maxHeight: "500px",
        }}
      >
        <Card.Header>
          <Link href={`/homes/${encodeURIComponent(props.homeId)}`} passHref>
            <Image
              loader={cloudinaryLoader}
              src={`${props.image}`}
              width={400}
              height={300}
              alt="home"
              style={{ cursor: "pointer" }}
            />
          </Link>
        </Card.Header>
        <Card.Body>
          <Text
            css={{
              fontWeight: "bold",
            }}
          >{`${props.address}`}</Text>
          <Text
            className="line-clamp"
            css={{
              fontWeight: "normal",
              fontSize: "small",
              color: "gray",
              verticalAlign: "middle",
              lineHeight: "1.5",
            }}
          >
            {description}
          </Text>
        </Card.Body>
        <Card.Footer css={{ justifyContent: "center" }}>
          <Link href={`/homes/${encodeURIComponent(props.homeId)}`} passHref>
            <Button className="make-an-offer-button">Make an Offer</Button>
          </Link>
        </Card.Footer>
      </Card>
    </div>
  );
};

export default HomeCard;
Builder.registerComponent(HomeCard, {
  name: "HomeCard",
  noWrap: true,
  inputs: [
    {
      name: "maxWidth",
      type: "string",
      defaultValue: "400px",
      required: true,
    },
    {
      name: "minHeight",
      type: "string",
      defaultValue: "300px",
      required: true,
    },
    {
      name: "width",
      type: "string",
      defaultValue: "100%",
      required: true,
    },
    {
      name: "address",
      type: "string",
      defaultValue: "Address",
      required: true,
    },
    {
      name: "description",
      type: "string",
      defaultValue: "Home description",
      required: true,
    },
    {
      name: "image",
      type: "string",
      defaultValue: "https://via.placeholder.com/300",
      required: true,
    },
    {
      name: "homeId",
      type: "string",
      required: true,
    },
  ],
});
