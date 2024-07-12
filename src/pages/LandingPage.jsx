import React from "react";
import logo from "../assets/logo.png";

const LandingPage = () => {
  return (
    <>
      {/* Hero Section: Image Side with Simple Header */}
      <div className="relative overflow-hidden bg-white">
        {/* Main Header */}
        <header
          id="page-header"
          className="relative flex flex-none items-center py-8"
        >
          {/* Main Header Content */}
          <div className="container mx-auto flex flex-col gap-4 px-4 text-center sm:flex-row sm:items-center sm:justify-between sm:gap-0 lg:px-8 xl:max-w-7xl">
            <div>
              <a
                href="/"
                className="group inline-flex items-center gap-2 text-xl font-bold tracking-wide text-gray-900 hover:text-blue-700"
              >
                <ion-icon name="accessibility-outline"></ion-icon>
                <span>Activity Scout</span>
              </a>
            </div>
            <nav className="space-x-3 md:space-x-6">
              <a
                href="/features"
                className="text-sm font-semibold text-gray-900 hover:text-blue-700"
              >
                <span>Features</span>
              </a>
              <a
                href="/about"
                className="text-sm font-semibold text-gray-900 hover:text-blue-700"
              >
                <span>About</span>
              </a>
              <a
                href="#"
                className="text-sm font-semibold text-gray-900 hover:text-blue-700"
              >
                <span>Support</span>
              </a>
            </nav>
          </div>
          {/* END Main Header Content */}
        </header>
        {/* END Main Header */}

        {/* Hero Content */}
        <div className="container relative mx-auto flex flex-col gap-16 px-4 py-16 text-center lg:flex-row lg:gap-0 lg:px-8 lg:py-32 lg:text-left xl:max-w-7xl">
          <div className="lg:flex lg:w-1/2 lg:items-center">
            <div>
              <h1 className="mb-4 text-4xl font-black text-black">
                Welcome to 
                <span className="text-blue-600"> Activity Scout</span>
              </h1>
              <h2 className="text-xl font-medium leading-relaxed text-gray-700">
                Your Gateway to City Adventures! Discover the best activities,
                attractions, and hidden gems in your favorite cities with
                Activity Scout. Whether you're a local looking for new
                experiences or a traveler eager to explore, our platform is
                designed to guide you through the most exciting and unique
                opportunities each city has to offer.
              </h2>
              <div className="flex flex-col justify-center gap-2 pb-16 pt-10 sm:flex-row sm:items-center lg:justify-start">
                <a
                  href="/home"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-700 px-7 py-3.5 font-semibold leading-6 text-white hover:border-blue-600 hover:bg-blue-600 hover:text-white focus:ring focus:ring-blue-400/50 active:border-blue-700 active:bg-blue-700"
                >
                  <ion-icon name="accessibility-outline"></ion-icon>
                  <span>Get Started</span>
                </a>
                <a
                  href="/learn-more"  
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-400 bg-white px-7 py-3.5 font-semibold leading-6 text-gray-800 hover:border-gray-300 hover:text-gray-900 hover:shadow-sm focus:ring focus:ring-gray-300/25 active:border-gray-200 active:shadow-none"
                >
                  <span>Learn more</span>
                </a>
              </div>
            </div>
          </div>
          <div className="lg:ml-16 lg:flex lg:w-1/2 lg:items-center lg:justify-center">
            <div className="relative mx-5 lg:w-96">
              <div className="bg-tranparent absolute left-0 top-0 -ml-20 -mt-16 size-40 rounded-full border border-blue-500 lg:size-72" />
              <div className="bg-tranparent absolute left-0 top-0 -ml-14 -mt-20 size-40 rounded-full border border-blue-300 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-16 -mr-20 size-40 rounded-full border border-blue-500 lg:size-72" />
              <div className="bg-tranparent absolute bottom-0 right-0 -mb-20 -mr-14 size-40 rounded-full border border-blue-300 lg:size-72" />
              <div className="absolute inset-0 -m-6 -rotate-2 rounded-xl bg-gray-200" />
              <div className="absolute inset-0 -m-6 rotate-1 rounded-xl bg-blue-800/75 shadow-inner" />
              <img
                src={logo}
                className="relative mx-auto rounded-lg shadow-lg"
                alt="Hero Image"
              />
            </div>
          </div>
        </div>
        {/* END Hero Content */}
      </div>
      {/* END Hero Section: Image Side with Simple Header */}
    </>
  );
};

export default LandingPage;
