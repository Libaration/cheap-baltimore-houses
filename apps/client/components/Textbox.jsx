import { InputText } from "primereact/inputtext";
import { Builder } from "@builder.io/react";
import { useState } from "react";
const Textbox = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  return <InputText type="text" value={value} onChange={onChange} />;
};

export default Textbox;
Builder.registerComponent(Textbox, {
  name: "Textbox",
  inputs: [
    {
      name: "placeholder",
      type: "string",
      defaultValue: "",
    },
  ],
  // Adding defaults is important for easy usability
});
