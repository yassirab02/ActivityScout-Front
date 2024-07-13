import React from 'react';
import logo from '../assets/logo.png'; // Replace with your actual logo file path
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAF1ED] text-black py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <img src={logo} alt="Logo" className="h-12 md:h-16" /> {/* Adjusted logo size */}
            <span className="text-2xl md:text-3xl font-semibold text-[#5B86BB]">Activity Scout</span>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end flex-grow">
            <ul className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-4 text-sm">
          <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Activity Scout. All rights reserved.</div>
          <div className="flex gap-4">
            <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-2xl hover:text-red-700" />
            </a>
            <a href="https://www.facebook.com/yourcompany" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-2xl hover:text-blue-700" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
