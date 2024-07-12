import React from "react";
import Gym from '../assets/Gym.jpg';
import Restaurant from '../assets/Restaurant.jpg';
import Malls from '../assets/Malls.jpg';
import Pools from '../assets/Pools.jpg';
import Coffee from '../assets/Coffee.jpg';
import Football from '../assets/Football.jpg';

const Activities = () => {
  return (
    <>
      {/* Product List Section: Categories Grid */}
      <div className="dark:text-gray-100">
        <div className="container mx-auto px-4 py-16 lg:px-8 lg:py-32 xl:max-w-7xl">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src={Gym}
                alt="Gyms"
                className="object-cover h-full w-full transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Gyms
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={Restaurant}
                alt="Restaurants"
                className="object-cover h-full w-full transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Restaurants
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={Malls}
                alt="Malls"
                className="object-cover h-full w-full transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Malls
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75 sm:col-span-2 md:col-span-1"
            >
              <img
                src={Pools}
                alt="Pools"
                className="object-cover h-full w-full transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Pools
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={Coffee}
                alt="Coffee shops"
                className="object-cover h-full w-full transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Coffee shops
                </div>
              </div>
            </a>
            <a
              href="#"
              className="group relative block overflow-hidden transition ease-out active:opacity-75"
            >
              <img
                src={Football}
                alt="Football pitch"
                className="object-cover h-full w-full transition ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/25 transition ease-out group-hover:bg-black/0" />
              <div className="absolute inset-0 flex items-center justify-center p-4">
                <div className="rounded-3xl bg-white/95 px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ease-out group-hover:bg-blue-600 group-hover:text-white dark:border-gray-800 dark:bg-gray-900/90">
                  Football pitch
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
      {/* END Product List Section: Categories Grid */}
    </>
  );
};

export default Activities;
