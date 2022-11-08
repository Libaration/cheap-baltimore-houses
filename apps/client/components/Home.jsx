import { builder, Builder, BuilderComponent } from "@builder.io/react";
import { Card, Text } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import Image from "next/future/image";
import { Button } from "primereact/button";
import Link from "next/link";
export async function getStaticProps() {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/",
      },
    })
    .toPromise();
  return {
    props: {
      page: page || null,
    },
    revalidate: 5,
  };
}
const Home = (props) => {
  console.log(props);
  return (
    <div>
      <BuilderComponent model="page" content={page} />
    </div>
  );
};

export default Home;
Builder.registerComponent(Home, {
  name: "Home",
});
