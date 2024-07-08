import React, { useState } from 'react';
import Button from './Button.jsx';

const Navbar = () => {
  let Links = [
    { name: "HOME", link: "7" },
    { name: "SERVICES", link: "7" },
    { name: "ABOUT", link: "7" },
    { name: "BLOGS", link: "7" },
    { name: "CONTACT", link: "7" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <div className='shadow-md w-full fixed top-0 left-0 bg-white z-40'>
      <div className='md:flex items-center justify-between py-4 md:px-10 px-7'>
        <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] text-gray-800'>
          <span className='text-3xl text-indigo-600 mr-1 pt-2'>
          <ion-icon name="accessibility-outline"></ion-icon>
          </span>
          ActivityScout
        </div>

        <div onClick={() => setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
          <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
        </div>

        <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20 opacity-100' : 'top-[-490px] md:opacity-100 opacity-0'}`}>
          {
            Links.map((Link) => (
              <li key={Link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                <a href={Link.link} className='text-black  hover:text-blue-700 duration-500'>{Link.name}</a>
              </li>
            ))
          }
          <Button>
            Sign Up
          </Button>
        </ul>
      </div>

      {/* Search bar for small screens */}
      <div className={`md:hidden px-7 pb-4 transition-all duration-500 ease-in ${open ? 'block' : 'hidden'}`}>
        <input
          type='text'
          placeholder='Search...'
          className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
      </div>
    </div>
  );
}

export default Navbar;
