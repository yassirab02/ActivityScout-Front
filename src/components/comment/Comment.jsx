import React from 'react';
import kech from '../../assets/kech.jpg';

const Comment = () => {
  return (
    <>
      {/* Media Objects: Comment */}
      <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100 mt-4 sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl">
        <div className="p-5">
          <div className="flex gap-4">
            {/* Avatar */}
            <img
              className="mt-1 inline-block h-12 w-12 sm:h-16 sm:w-16 rounded-full flex-none"
              src={kech}
              alt="User Avatar"
            />
            {/* Content */}
            <div className="flex-grow text-sm">
              <p className="font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300">
                Lori Grant
              </p>
              <p className="mt-1">
                What an amazing city and amazing people. Totally loved it.
              </p>
            </div>
            {/* END Content */}
          </div>
        </div>
      </div>
      {/* END Media Objects: Comment */}
    </>
  );
}

export default Comment;
