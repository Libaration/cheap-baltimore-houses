import Image from "next/future/image";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
import { useEffect, useState } from "react";
import { generateMarkdown } from "../../lib/markDownMaker";
import Link from "next/link";
const Home = ({ home }) => {
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
      <div className="text-white p-5 max-w-md max-h-fit">
        <div className="mx-auto overflow-hidden rounded-lg bg-white shadow">
          <div className="relative aspect-video">
            <Link href={`homes/${home.id}`}>
              <Image
                loader={cloudinaryLoader}
                src={`${coverImage}`}
                fill
                alt="home"
                className="object-cover cursor-pointer"
              />
            </Link>
          </div>
          <div className="p-4">
            <p className="mb-1 text-sm text-primary-500 text-center">
              Chris Seaborn • <time>{date}</time>
            </p>
            <h3 className="text-xl font-medium text-gray-900 text-center">
              {address}
            </h3>
            <div className="mt-1 text-gray-700 text-xs line-clamp">
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
    </>
  );
};
export default Home;
