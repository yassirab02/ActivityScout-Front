import React from 'react';
import logo from '../assets/logo.png'; // Replace with your actual logo file path
import {
    FaWhatsapp,
    FaInstagram,
    FaLocationArrow,
    FaPhone,
  } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#FAF1ED] text-black py-6 mt-6 h-80">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-48" /> {/* Adjusted logo size */}
            <span className="text-6xl font-[Poppins] text-[#5B86BB]">Activity <br />Scout</span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-gray-300">Home</a></li>
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            </ul>
          </nav>
        </div>
        <div className="flex items-center justify-between mt-4 text-sm">
          <div>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</div>
          <div>
            <a href="https://www.instagram.com/yourcompany" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-xl" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
