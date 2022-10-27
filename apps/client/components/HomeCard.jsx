import { builder, Builder } from "@builder.io/react";
import { Card, Text } from "@nextui-org/react";
export async function getStaticProps() {
  const placeholder = await builder
    .get("maxWidth", {
      // You can use options for queries, sorting, and targeting here
      // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
    })
    .promise();

  return {
    props: {
      maxWidth: maxWidth || null,
    },
    revalidate: 5,
  };
}
const HomeCard = (props) => {
  return (
    <Card css={{ mw: `${props.maxWidth}` }}>
      <Card.Body>
        <Text css={{ fontWeight: "bold" }}>{`${props.address}`}</Text>
        <Text
          css={{ fontWeight: "normal", fontSize: "small" }}
        >{`${props.description}`}</Text>
      </Card.Body>
    </Card>
  );
};

export default HomeCard;
Builder.registerComponent(HomeCard, {
  name: "HomeCard",
  inputs: [
    {
      name: "maxWidth",
      type: "string",
      defaultValue: "400px",
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
