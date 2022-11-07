import { builder, Builder } from "@builder.io/react";
import { Card, Text } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
export async function getStaticProps() {
  const placeholder = await builder
    .get("maxWidth", "minHeight", "width", "address", "description", {
      // You can use options for queries, sorting, and targeting here
      // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
    })
    .promise();
  return {
    props: {
      maxWidth: maxWidth || null,
      minHeight: minHeight || null,
      width: width || null,
      address: address || null,
      description: description || null,
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
    <div className="home-card p-4">
      <Card
        css={{
          mw: `${props.maxWidth}`,
          minHeight: `${props.minHeight}`,
          width: `${props.width} !important`,
        }}
      >
        <Card.Body>
          <Text css={{ fontWeight: "bold" }}>{`${props.address}`}</Text>
          <Text css={{ fontWeight: "normal", fontSize: "small" }}>
            {description}
          </Text>
        </Card.Body>
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
  ],
});
