import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src="/path/to/logo.png"
            alt="Centre for Development Research"
            className="h-10 w-10 object-contain"
          />
          <span className="text-blue-800 font-bold text-lg tracking-wide">
            CENTRE FOR DEVELOPMENT RESEARCH
          </span>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <a href="/" className="text-orange-600 hover:text-orange-800">Home</a>
          <a href="/who-we-are" className="hover:text-orange-600">Who We Are?</a>
          <a href="/what-we-do" className="hover:text-orange-600">What We Do?</a>
          <a href="/events" className="hover:text-orange-600">Events</a>
          <a href="/gallery" className="hover:text-orange-600">Gallery</a>
          <a href="/blog" className="hover:text-orange-600">Blog</a>
          <a href="/contact" className="hover:text-orange-600">Contact</a>
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
