const MapSection = () => {
  return (
    <>
      <section class="text-gray-700 body-font relative">
        <div class="absolute inset-0 bg-gray-300">
          <iframe
            width="100%"
            height="100%"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
            title="map"
            scrolling="no"
            src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
            style={{ grayscale: "1", contrast: "1.2", opacity: "0.4" }}
          ></iframe>
        </div>
        <div class="container px-5 py-24 mx-auto flex">
          <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
            <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">How can we help?</h2>
            <p class="leading-relaxed mb-5 text-gray-600">
              Schedule a call, ask a question, sign up for our newsletter or send us some feedback.
            </p>
            <input
              class="bg-white rounded border border-gray-400 focus:outline-none focus:border-indigo-500 text-base px-4 py-2 mb-4"
              placeholder="Email"
              type="email"
            />
            <textarea
              class="bg-white rounded border border-gray-400 focus:outline-none h-32 focus:border-indigo-500 text-base px-4 py-2 mb-4 resize-none"
              placeholder="Message"
            ></textarea>
            <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              SUBMIT
            </button>
            <p class="text-xs text-gray-500 mt-3">
              By completing and submitting this form, you agree to the terms and conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default MapSection;
