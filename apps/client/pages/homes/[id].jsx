import { homesCalls } from "../../lib/homes";
import Image from "next/future/image";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
import { useState, useEffect } from "react";
import { generateMarkdown } from "../../lib/markDownMaker";
const HomeShow = ({ home }) => {
  console.log(home.attributes);
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
      <nav aria-label="breadcrumb" className="p-5">
        <ol class="inline-flex items-center space-x-4 py-2 text-sm font-medium">
          <li class="inline-flex items-center">
            <a href="#" class="text-secondary-500 hover:text-secondary-600">
              Home
            </a>
          </li>

          <li class="inline-flex items-center space-x-4" aria-current="page">
            <svg
              class="h-6 w-6 text-gray-400"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <a class="text-secondary-100 hover:text-secondary-700" href="#">
              {address}
            </a>
          </li>
        </ol>
      </nav>

      <div className="text-white h-full flex items-center p-5">
        <div class="mx-auto max-w-6xl overflow-hidden rounded-lg bg-white shadow">
          <Image
            loader={cloudinaryLoader}
            src={`${coverImage}`}
            width={512}
            height={288}
            alt="home"
            className="aspect-video w-full"
          />
          <div class="p-4">
            <p class="mb-1 text-sm text-primary-500">
              Chris Seaborn • <time>{date}</time>
            </p>
            <h3 class="text-xl font-medium text-gray-900">{address}</h3>
            <p class="mt-1 text-gray-700 text-xs">{descriptionState}</p>
            <div class="mt-4 flex gap-2">
              <span class="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-600">
                Available
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                Recently Listed
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                3 Beds
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                3 Baths
              </span>
              <span class="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                2 Levels
              </span>
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
