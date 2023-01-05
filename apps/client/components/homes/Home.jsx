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
          <Link href={`homes/${home.id}`}>
            <div className="relative aspect-video">
              <a>
                <Image
                  src={coverImage}
                  loader={cloudinaryLoader}
                  fill
                  sizes="(max-width: 576px) 100vw,
                          (max-width: 768px) 50vw,
                          (max-width: 992px) 33vw,
                          (max-width: 1200px) 25vw,
                          20vw"
                  alt="home"
                  className="object-cover cursor-pointer"
                />
              </a>
            </div>
          </Link>
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
