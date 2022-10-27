import { Builder, withChildren } from "@builder.io/react";
const Section = (props) => {
  return <div className="builder-section">{props.children}</div>;
};
const SectionWithChildren = withChildren(Section);
export default SectionWithChildren;
Builder.registerComponent(SectionWithChildren, {
  name: "Section",
  // Adding defaults is important for easy usability
  defaultChildren: [
    {
      "@type": "@builder.io/sdk:Element",
      component: { name: "Text", options: { text: "Content etc here" } },
    },
  ],
});
