import React from 'react';
import kech from '../assets/kech.jpg';

const Comment = () => {
    return (
      <>
        {/* Media Objects: Comment */}
        <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100 mt-4">
          <div className="grow p-5">
            <div className="flex gap-4">
              {/* Avatar */}
              <img
                className="mt-1 inline-block size-8 flex-none rounded-full sm:size-12"
                src={kech}
                alt="User Avatar"
              />
              {/* Content */}
              <div className="grow text-sm">
                  <p
                    className=" mb-1font-semibold text-blue-600 hover:text-blue-400 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Lori Grant
                  </p>
                 what an amazing city and amazing people. Totally loved it 
                <p className="space-x-2">
                  {/* <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-400"
                  >
                    Like
                  </a>
                  <a
                    href="#"
                    className="font-medium text-gray-500 hover:text-gray-400"
                  >
                    Reply
                  </a> */}
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