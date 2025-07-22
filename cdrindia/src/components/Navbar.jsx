import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
// import logo from "../public/logo.png";


const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-9">
        Logo and Title
        <div className="flex items-center space-x-3">
          {/* <img
            src=
            alt="Centre for Development Research"
            className="h-10 w-10 object-contain"
          /> */}
          {/* <span className="text-blue-800 font-bold text-lg tracking-wide font-['Segoe_UI',sans-serif]">
    CENTRE FOR DEVELOPMENT RESEARCH
  </span> */}
        </div>
        <div className="hidden md:flex space-x-6 text-gray-800 font-stretch-100% font-semibold font-['Segoe_UI',sans-serif]">
          <a href="/" className="relative group text-black hover:text-orange-600 pb-1">
            Home
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/who-we-are" className="relative group hover:text-orange-600 pb-1">
            Who We Are?
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/what-we-do" className="relative group hover:text-orange-600 pb-1">
            What We Do?
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/events" className="relative group hover:text-orange-600 pb-1">
            Events
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/gallery" className="relative group hover:text-orange-600 pb-1">
            Gallery
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/blog" className="relative group hover:text-orange-600 pb-1">
            Blog
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          <a href="/contact" className="relative group hover:text-orange-600 pb-1">
            Contact
            <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-orange-600">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-orange-800" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-orange-800" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="hover:text-orange-800" />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-orange-800" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;