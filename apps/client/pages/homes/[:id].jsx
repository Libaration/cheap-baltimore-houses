import { builder, Builder, BuilderComponent } from "@builder.io/react";
import HomeShow from "../../components/homes/Home";
export async function getStaticPaths() {
  //  Fetch all published pages for the current model.
  //  Using the `fields` option will limit the size of the response
  //  and only return the `data.url` field from the matching pages.
  // const pages = await builder.getAll("page", {
  //   fields: "data.url", // only request the `data.url` field
  //   options: { noTargeting: true },
  //   limit: 0,
  // });
  const r = await fetch(`${process.env.API_URL}/homes/?fields%5B0%5D=id`, {
    headers: {
      "Content-Type": "application/json",
    },
  });
  const { data } = await r.json();
  return {
    paths: data.map((home) => `/homes/${home.id}`),
    fallback: true,
  };
}
export async function getStaticProps(context) {
  const id = context.params[":id"];
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: `/homes/${id}`,
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

export default function HomePage({ page }) {
  return (
    <div>
      <BuilderComponent model="page" content={page} />
    </div>
  );
}
