import { homesCalls } from "../../lib/homes";
import Image from "next/future/image";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
import { useState, useEffect } from "react";
import { generateMarkdown } from "../../lib/markDownMaker";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";

const HomeShow = ({ home }) => {
  const coverImage =
    home.attributes.cover_image.data.attributes.provider_metadata.public_id;
  const date = new Date(home.attributes.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const address = `${home.attributes.street} ${
    home.attributes.street2 ? home.attributes.street2 : ""
  } ${home.attributes.city}, ${home.attributes.state} ${home.attributes.zip}`;
  const description = home.attributes.description;
  const [descriptionState, setDescriptionState] = useState(description);
  useEffect(() => {
    setDescriptionState(generateMarkdown(description));
  }, [description]);
  return (
    <>
      <Head>
        <meta name="theme-color" content="#161724" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#161724" />
      </Head>
      <Breadcrumb customTitle={address} />
      <div className="flex items-center justify-center">
        <div
          className="text-white h-full p-5 max-w-full"
          style={{ width: "40em" }}
        >
          <div className="mx-auto overflow-hidden rounded-lg bg-white shadow">
            <div className="relative aspect-video">
              <Image
                loader={cloudinaryLoader}
                src={`${coverImage}`}
                fill
                alt="home"
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="mb-1 text-sm text-primary-500 text-center">
                Chris Seaborn • <time>{date}</time>
              </p>
              <h3 className="text-xl font-medium text-gray-900 text-center">
                {address}
              </h3>
              <div className="mt-1 text-gray-700 text-xs">
                {descriptionState}
              </div>
              <div className="mt-4 flex gap-2 justify-center">
                <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                  Available
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                  Recently Listed
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  3 Beds
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  3 Baths
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  2 Levels
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getStaticPaths() {
  const res = await homesCalls.get.allHomes();
  const homes = res.data;
  const paths = homes.map((home) => `/homes/${home.id}`);
  return { paths, fallback: false };
}
export async function getStaticProps(context) {
  const res = await homesCalls.get.getHome(context.params.id);
  const home = res.data;
  return { props: { home } };
}
export default HomeShow;
