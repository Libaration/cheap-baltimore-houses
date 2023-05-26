import Image from "next/future/image";
import { Slide } from "react-awesome-reveal";
import Link from "next/link";
const HomeSection = () => {
  return (
    <>
      <section className="text-gray-700 body-font landing-home-section">
        <div className="container mx-auto flex pb-20 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center center-safe">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mt-4 ">
              Buy and Sell Real Estate in Maryland.
              <br className="hidden lg:inline-block" />
              Find Cheap Baltimore Houses.
            </h1>
            <p className="mb-8 leading-relaxed">
              How do you buy real estate in Maryland? How do you sell real estate in Maryland? Get
              the answers to your Maryland real estate questions by reaching out to the team at
              Cheap Baltimore Houses. Start your journey.
            </p>

            <div className="flex justify-center center-safe">
              <button className="inline-flex text-grey bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-[#333333] duration-300 rounded text-lg">
                <Link href={"/homes"}> I Want to Buy </Link>
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-[#333333] duration-300 rounded text-lg">
                <Link href={"#"}> I Want to Sell </Link>
              </button>
            </div>
          </div>

          <Slide direction="right" triggerOnce>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 shrink center-safe how-it-works-image">
              <Image
                className="object-cover object-center rounded mt-12"
                alt="placeholder"
                src={
                  "https://www.decorilla.com/online-decorating/wp-content/uploads/2022/03/Minimalist-modern-home-interior-design-with-a-patio.jpeg"
                }
                width={720}
                height={600}
                blurDataURL="iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8v4qhHgAGgwIqdX7cjgAAAABJRU5ErkJggg"
                placeholder="blur"
              />
            </div>
          </Slide>
        </div>
      </section>
    </>
  );
};
export default HomeSection;
