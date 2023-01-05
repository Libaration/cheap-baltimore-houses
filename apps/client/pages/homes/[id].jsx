import { homesCalls } from "../../lib/homes";
import { useState, useEffect, useCallback } from "react";
import { generateMarkdown } from "../../lib/markDownMaker";
import Breadcrumb from "../../components/Breadcrumb";
import Head from "next/head";
import PhotoAlbum from "react-photo-album";
import NextJsImage from "../../components/homes/NextJsImage";
import Image from "next/future/image";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
const HomeShow = ({ home }) => {
  const [index, setIndex] = useState(-1);
  const Gallery = useCallback(
    ({ view, photos }) => (
      <PhotoAlbum
        layout={view}
        photos={photos}
        renderPhoto={NextJsImage}
        onClick={({ index }) => setIndex(index)}
      />
    ),
    []
  );
  const coverImage =
    home.attributes.cover_image.data.attributes.provider_metadata.public_id;
  const coverImageHeight = home.attributes.cover_image.data.attributes.height;
  const coverImageWidth = home.attributes.cover_image.data.attributes.width;
  const additionalImages =
    home.attributes.additional_images.data &&
    home.attributes.additional_images.data.map((image, index) => {
      return {
        src: image.attributes.provider_metadata.public_id,
        width: image.attributes.width,
        height: image.attributes.height,
        alt: `Home Additional Image ${index}`,
      };
    });
  const photos = [
    {
      src: coverImage,
      width: coverImageWidth,
      height: coverImageHeight,
      alt: "Home Cover Image",
    },
    ...(additionalImages || []),
  ];
  const slides = photos.map(({ src, alt, width, height }) => ({
    src: cloudinaryLoader({ src, width }),
    alt,
    width,
    height,
    srcSet: [
      { src: cloudinaryLoader({ src, width: 320 }), width: 320, height: 213 },
      { src: cloudinaryLoader({ src, width: 640 }), width: 640, height: 427 },
      { src: cloudinaryLoader({ src, width: 1200 }), width: 1200, height: 800 },
      {
        src: cloudinaryLoader({ src, width: 2048 }),
        width: 2048,
        height: 1365,
      },
      {
        src: cloudinaryLoader({ src, width: 3840 }),
        width: 3840,
        height: 2560,
      },
    ],
  }));
  const [view, setView] = useState(additionalImages ? "columns" : "rows");
  const date = new Date(home.attributes.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const handleViewChange = (e) => {
    setView(e.target.name);
  };
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
        <meta name="theme-color" content="#fafafa" />
        <meta name="apple-mobile-web-app-status-bar-style" content="#fafafa" />
      </Head>
      <Breadcrumb customTitle={address} />
      <h4 className="smallHeroText text-center">Cheap Baltimore Houses</h4>
      <h1 id="small-address-hero-text" className="text-center">
        {address}
      </h1>
      <div className="flex justify-center">
        <ol>
          <li className="float-left mr-2 ml-2">
            <Image
              src="/column.png"
              height="24"
              width="24"
              alt="column-view"
              name="columns"
              className="object-cover cursor-pointer"
              onClick={handleViewChange}
            />
          </li>
          <li className="float-left ml-2 mr-2">
            <Image
              src="/row.png"
              height="24"
              width="24"
              alt="row-view"
              name="rows"
              className="object-cover cursor-pointer"
              onClick={handleViewChange}
            />
          </li>
          <li className="float-left mr-2 ml-2">
            <Image
              src="/masonry.png"
              height="24"
              width="24"
              alt="masonry-view"
              name="masonry"
              className="object-cover cursor-pointer"
              onClick={handleViewChange}
            />
          </li>
        </ol>
      </div>

      <div className="flex items-center justify-center ">
        <div className="text-black h-full p-5 max-w-full">
          <div className="mx-auto overflow-hidden rounded-lg bg-white shadow">
            <div className="relative">
              <Gallery view={view} photos={photos} />
              <Lightbox
                slides={slides}
                open={index >= 0}
                index={index}
                close={() => setIndex(-1)}
                inline={{
                  style: {
                    width: "100%",
                    maxWidth: "900px",
                    aspectRatio: "3 / 2",
                  },
                }}
                styles={{
                  thumbnail: { border: "none" },
                  root: { "--yarl__color_backdrop": "rgba(0, 0, 0, .9)" },
                }}
                plugins={[Fullscreen, Thumbnails, Zoom]}
              />
            </div>
            <div className="p-4">
              <p className="mb-1 text-sm text-primary-500 text-center">
                Added • <time>{date}</time>
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
  return { props: { home }, revalidate: 300 };
}
export default HomeShow;
