import React from "react";

const ActivityTypes = () => {
  return (
    <>
      <div className="flex flex-col items-center mt-5">
        <h1 className="text-xl font-semibold font-[Poppins] mb-2">Filter By:</h1>
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
    </>
  );
};

export default ActivityTypes;
