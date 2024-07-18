import React from "react";

const Filter = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <div className="flex items-center mb-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="w-5 h-5 text-gray-700 mr-2"
        >
          <path
            fillRule="evenodd"
            d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
            clipRule="evenodd"
          />
        </svg>
        <h1 className="text-xl font-semibold font-[Poppins]">Filter By:</h1>
      </div>
      <div className="flex flex-wrap justify-center space-x-2">
        <button className="bg-blue-100 text-blue-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800">
          All
        </button>
        <button className="bg-gray-100 text-gray-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-gray-400 border border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-600">
          Gyms
        </button>
        <button className="bg-red-100 text-red-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400 hover:bg-red-200 dark:hover:bg-red-800">
          Restaurants
        </button>
        <button className="bg-green-100 text-green-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400 hover:bg-green-200 dark:hover:bg-green-800">
          Malls
        </button>
        <button className="bg-yellow-100 text-yellow-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-yellow-300 border border-yellow-300 hover:bg-yellow-200 dark:hover:bg-yellow-700">
          Football Pitch
        </button>
        <button className="bg-indigo-100 text-indigo-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400 hover:bg-indigo-200 dark:hover:bg-indigo-800">
          Pools
        </button>
        <button className="bg-purple-100 text-purple-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400 hover:bg-purple-200 dark:hover:bg-purple-800">
          Coffee shops
        </button>
        <button className="bg-pink-100 text-pink-800 text-sm font-medium me-3 px-3 py-1 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400 hover:bg-pink-200 dark:hover:bg-pink-800">
          High rating
        </button>
      </div>
    </div>
  );
};

export default Filter;
