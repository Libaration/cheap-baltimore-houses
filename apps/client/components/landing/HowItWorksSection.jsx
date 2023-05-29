const HowItWorksSection = () => {
  return (
    <>
      <section className="body-font border-t border-gray-200 how-it-works-section">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2
              className="text-xs tracking-widest font-medium title-font mb-1"
              style={{ color: "#00b0ff" }}
            >
              CHEAP BALTIMORE HOUSES
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font">How It Works</h1>
          </div>
          <div className="flex flex-wrap -m-4 text-gray-900">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full flex-shrink-0"
                    style={{ color: "#00b0ff" }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Find a Property.</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {`Whether you're looking for a new home, an investment property, or a fixer-upper,
                    we can help you find the perfect property at an affordable price.`}
                  </p>
                  <a
                    href="https://cheapbaltimorehouses.com/homes"
                    className="mt-3  inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full  text-white flex-shrink-0"
                    style={{ color: "#00b0ff" }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Buy a Property</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {`In addition, we don't charge any fees or commissions for our services. You pay
                    only the price of the property, with no hidden costs or fees.`}
                  </p>
                  <a
                    href="https://cheapbaltimorehouses.com/homes"
                    className="mt-3  inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div
                    className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full text-white flex-shrink-0"
                    style={{ color: "#00b0ff" }}
                  >
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">Investing</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-base">
                    {`Don't miss out on this opportunity to find the perfect property in Baltimore at
                    an unbeatable price. Invest in Cheap Baltimore Houses today.`}
                  </p>
                  <a
                    href="https://cheapbaltimorehouses.com/homes"
                    className="mt-3  inline-flex items-center"
                  >
                    Learn More
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default HowItWorksSection;
