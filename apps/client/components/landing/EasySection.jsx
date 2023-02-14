const EasySection = (props) => {
    return (
        <section class="text-gray-700 body-font border-t border-gray-200">
	<div class="container px-5 py-24 mx-auto flex flex-wrap">
		<div class="lg:w-1/2 w-full mb-10 lg:mb-0 rounded-lg overflow-hidden">
			<img alt="feature" class="object-cover object-center h-full w-full" src="https://dummyimage.com/600x600/edf2f7/a5afbd" />
		</div>
		<div class="flex flex-col flex-wrap lg:py-6 -mb-10 lg:w-1/2 lg:pl-12 lg:text-left text-center">
			<div class="flex flex-col mb-10 lg:items-start items-center">
				<div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
					<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
						<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
					</svg>
				</div>
				<div class="flex-grow">
					<h2 class="text-gray-900 text-lg title-font font-medium mb-3">Buying properties has never been easier</h2>
					<p class="leading-relaxed text-base">Cheap Baltimore Houses is a unique platform that connects buyers like you with off-market properties in Baltimore that are available at a fraction of the cost of properties on the traditional market.</p>
				</div>
			</div>
			<div class="flex flex-col mb-10 lg:items-start items-center">
				<div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
					<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
						<circle cx="6" cy="6" r="3"></circle>
						<circle cx="6" cy="18" r="3"></circle>
						<path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
					</svg>
				</div>
				<div class="flex-grow">
					<h2 class="text-gray-900 text-lg title-font font-medium mb-3">Cut out the fees</h2>
					<p class="leading-relaxed text-base">Are you tired of paying high fees and commissions to real estate agents when you want to buy a property? Do you want to avoid the hassle of dealing with the traditional real estate market and find off-market properties in the Baltimore area at affordable prices?</p>
				</div>
			</div>
			<div class="flex flex-col mb-10 lg:items-start items-center">
				<div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
					<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
						<path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
						<circle cx="12" cy="7" r="4"></circle>
					</svg>
				</div>
				<div class="flex-grow">
					<h2 class="text-gray-900 text-lg title-font font-medium mb-3">Make your offer</h2>
					<p class="leading-relaxed text-base">Make a quick and easy offer online! We handle the settlement process, and make sure that you settle on your property in 30 days or less.</p>
					<a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
						<svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
							<path d="M5 12h14M12 5l7 7-7 7"></path>
						</svg>
					</a>
				</div>
			</div>
		</div>
	</div>
	</section>
    )
    };
export default EasySection;
