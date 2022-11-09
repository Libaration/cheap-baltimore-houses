import { useRouter } from "next/router";
import DefaultErrorPage from "next/error";
import Head from "next/head";
import React from "react";
import { BuilderComponent, builder, useIsPreviewing } from "@builder.io/react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Textbox from "../components/Textbox";
import HomeCard from "../components/HomeCard";
import Home from "../components/Home";
export async function getStaticProps({ params }) {
  const page = await builder
    .get("page", {
      userAttributes: {
        urlPath: "/" + (params?.page?.join("/") || ""),
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

export async function getStaticPaths() {
  //  Fetch all published pages for the current model.
  //  Using the `fields` option will limit the size of the response
  //  and only return the `data.url` field from the matching pages.
  const pages = await builder.getAll("page", {
    fields: "data.url", // only request the `data.url` field
    options: { noTargeting: true },
    limit: 0,
  });

  return {
    paths: pages
      .map((page) => `${page.data?.url}`)
      .filter((url) => url != "/homes/**"),
    /* 
    kind of a hack to get rid of the homes/** route because it trying to fetch a home without providing an id but there's probably a better way to do this
    */
    fallback: true,
  };
}

export default function Page({ page }) {
  const router = useRouter();
  //  This flag indicates if you are viewing the page in the Builder editor.
  const isPreviewing = useIsPreviewing();

  if (router.isFallback) {
    return <h1>Loading...</h1>;
  }

  //  Add your error page here to return if there are no matching
  //  content entries published in Builder.
  if (!page && !isPreviewing) {
    return <DefaultErrorPage statusCode={404} />;
  }

  return (
    <>
      <Head>
        {/* Add any relevant SEO metadata or open graph tags here */}
        <title>{page?.data.title}</title>
        <meta name="description" content={page?.data.descripton} />
      </Head>

      {/* Render the Builder page */}

      <BuilderComponent model="page" content={page} />
    </>
  );
}
