import { InputText } from "primereact/inputtext";
import { Builder, builder } from "@builder.io/react";
import { useState } from "react";
export async function getStaticProps() {
  const placeholder = await builder
    .get("placeholder", {
      // You can use options for queries, sorting, and targeting here
      // https://github.com/BuilderIO/builder/blob/main/packages/core/docs/interfaces/GetContentOptions.md
    })
    .promise();

  return {
    props: {
      placeholder: placeholder || null,
    },
    revalidate: 5,
  };
}
const Textbox = (props) => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  return (
    <InputText type="text" value={value} onChange={onChange} placeholder={props.placeholder} />
  );
};

export default Textbox;
Builder.registerComponent(Textbox, {
  name: "Textbox",
  inputs: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "Placeholder text",
      required: true,
    },
  ],
  // Adding defaults is important for easy usability
});
