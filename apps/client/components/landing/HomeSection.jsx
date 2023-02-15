const HomeSection = (props) => {
    return (
    <>
        <section className="text-gray-700 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Buy and Sell Real Estate in Maryland.<br className="hidden lg:inline-block" />Find Cheap Baltimore Houses.
            </h1>
            <p className="mb-8 leading-relaxed">How do you buy real estate in Maryland? How do you sell real estate in Maryland? Get the answers to your Maryland real estate questions by reaching out to the team at Cheap Baltimore Houses. Start your journey.
            </p>
            <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">I Want to Buy
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg">I Want to Sell
            </button>
            </div>
        </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600/edf2f7/a5afbd"
                />
            </div>
        </div>
        </section>
    </>
    )
    };
export default HomeSection;
