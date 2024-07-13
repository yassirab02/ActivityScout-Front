import React from "react";

export default function About() {
  return (
    <>
      {/* Features Section: Boxes with Icons */}
      <div className="bg-gradient-to-tr from-indigo-100 via-purple-50 to-teal-100 dark:from-indigo-900 dark:via-purple-900 dark:to-teal-900 dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-blue-400">
              <svg
                className="hi-outline hi-rectangle-stack mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"
                />
              </svg>
              <h4 className="mb-2 text-lg font-bold">1. Activity Scout</h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Activity Scout, founded in 2024, is an innovative platform
                dedicated to helping individuals discover and engage in a wide
                range of activities tailored to their interests and preferences.
                Designed to be user-friendly and highly interactive, Activity
                Scout leverages advanced technologies and user-centric design to
                provide personalized recommendations, seamless activity booking,
                and comprehensive event management.
              </p>
            </div>
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-blue-600 md:p-7 xl:p-10 dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-blue-400">
              <svg
                className="hi-outline hi-cube mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9"
                />
              </svg>
              <h4 className="mb-2 text-lg font-bold">2. Purpose</h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                By integrating social features, detailed reviews, and real-time
                updates, Activity Scout aims to create a vibrant community where
                users can share their experiences, discover new passions, and
                connect with like-minded individuals. Whether you're looking for
                outdoor adventures, cultural experiences, or wellness
                activities, Activity Scout offers a curated selection to ensure
                there's something for everyone.
              </p>
            </div>
            <div className="rounded-lg border border-white bg-white p-5 shadow-sm transition hover:border-blue-600 sm:col-span-2 md:p-7 lg:col-span-1 xl:p-10 dark:border-gray-800 dark:bg-gray-800 dark:shadow-none dark:hover:border-blue-400">
              <svg
                className="hi-outline hi-cog mb-5 inline-block size-12 text-blue-600 dark:text-blue-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495"
                />
              </svg>
              <h4 className="mb-2 text-lg font-bold">3. Helper Tools</h4>
              <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                Activity Scout is more than just a platform; it helps you find a
                gateway to new experiences, personal growth, and community
                connection. Whether you're looking to try something new, meet
                like-minded individuals, or simply add more fun to your routine,
                Activity Scout is your go-to source for discovering the best
                activities around you.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* END Features Section: Boxes with Icons */}
    </>
  );
}
