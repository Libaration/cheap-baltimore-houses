import Image from "next/future/image";
import { cloudinaryLoader } from "../../lib/cloudinaryLoader";
import { useEffect, useState } from "react";
import { generateMarkdown } from "../../lib/markDownMaker";
import Link from "next/link";
import pluralize from "pluralize";
import { isLoggedIn } from "../../lib/SWRCalls/session";
import { useUser, userToggleLike } from "../../lib/SWRCalls/user";
import { flatMap } from "lodash";
const Home = ({ home }) => {
  const [hovered, setHovered] = useState(false);
  const coverImage = home.attributes.cover_image.data.attributes.provider_metadata.public_id;
  const date = new Date(home.attributes.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  const address = `${home.attributes.street} ${
    home.attributes.street2 ? home.attributes.street2 : ""
  } ${home.attributes.city}, ${home.attributes.state} ${home.attributes.zip}`;
  const description = home.attributes.description;
  const available = home.attributes.available;
  const bedrooms = home.attributes.bedrooms;
  const bathrooms = home.attributes.bathrooms;
  const [descriptionState, setDescriptionState] = useState(description);
  const { user, isAuthorized, mutate } = useUser();
  const user_likes =
    (user && user.liked_homes && flatMap(user.liked_homes, (like) => like.id)) || [];

  useEffect(() => {
    setDescriptionState(generateMarkdown(description));
  }, [description]);
  const handleLike = async () => {
    mutate(userToggleLike(home.id), false);
  };
  const renderHeart = () => {
    if (isLoggedIn({})) {
      return user_likes.includes(home.id) ? (
        <Image
          src={"/liked.png"}
          width={24}
          height={24}
          alt="like heart"
          style={{ verticalAlign: "middle", cursor: "pointer" }}
          onClick={handleLike}
        />
      ) : (
        <Image
          src={"/unliked.png"}
          width={24}
          height={24}
          alt="like heart"
          style={{ verticalAlign: "middle", cursor: "pointer" }}
          onClick={handleLike}
        />
      );
    }
  };

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };
  return (
    <>
      <div className="text-white p-5 max-w-md max-h-fit m-1" role="homeContainer">
        <div
          className={`text-white p-1 max-w-md max-h-fit m-1 rounded-lg home_component_card ${
            hovered ? "shadow-lg" : "shadow"
          }`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={(e) => {
            e.currentTarget.classList.add("loading");
            e.currentTarget.querySelector("a").click();
            e.currentTarget.querySelector(".spinner").classList.remove("opacity-0");
            e.currentTarget.querySelector(".spinner").classList.add("opacity-100");
          }}
        >
          <div class="loading-overlay opacity">
            <div class="spinner opacity-0"></div>
          </div>
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
              Added • <time>{date}</time>
            </p>
            <h3 className="text-xl font-medium text-gray-900 text-center">{address}</h3>
            <div className="mt-1 text-gray-700 text-xs homeDescription overflow-hidden">
              <div className="relative overflow-hidden h-32 p-1">
                {descriptionState}
                <div
                  className="ellipsis"
                  style={{
                    position: "absolute",
                    bottom: 0,
                    right: 0,
                    left: 0,
                    height: "1.2em",
                    background: "linear-gradient(transparent, #fff)",
                  }}
                />
              </div>
            </div>
            <div className="mt-4 flex gap-2 justify-center">
              {available !== undefined && (
                <span
                  className={`inline-flex items-center gap-1 rounded-full ${
                    available ? "bg-blue-50" : "bg-red-50"
                  }  px-2 py-1 text-xs font-semibold ${
                    available ? "text-blue-600" : "text-red-600"
                  } `}
                >
                  {available ? "Available" : "Sold"}
                </span>
              )}

              {/* <span className="inline-flex items-center gap-1 rounded-full bg-indigo-50 px-2 py-1 text-xs font-semibold text-indigo-600">
                Recently Listed
              </span> */}
              {bedrooms ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  {pluralize("Bed", bedrooms, true)}
                </span>
              ) : null}
              {bathrooms ? (
                <span className="inline-flex items-center gap-1 rounded-full bg-orange-50 px-2 py-1 text-xs font-semibold text-orange-600">
                  {pluralize("Bath", bathrooms, true)}
                </span>
              ) : null}
              {isAuthorized && user_likes && (
                <div className="flex-1 text-end align-items-center justify-content-center ">
                  {renderHeart()}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
