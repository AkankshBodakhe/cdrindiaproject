import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md font-sans">
      <div className="container mx-auto flex justify-between items-center py-4 px-9">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          {/* <img
            src="/logo.png"
            alt="Centre for Development Research"
            className="h-10 w-10 object-contain"
          /> */}
          <span className="text-blue-800 font-bold text-lg tracking-wide">
            CENTRE FOR DEVELOPMENT RESEARCH
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-6 text-gray-800 font-semibold">
          {[
            { label: "Home", href: "/" },
            { label: "Who We Are?", href: "/who-we-are" },
            { label: "What We Do?", href: "/what-we-do" },
            { label: "Events", href: "/events" },
            { label: "Gallery", href: "/gallery" },
            { label: "Blog", href: "/blog" },
            { label: "Contact", href: "/contact" },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative group hover:text-orange-600 pb-1 text-black"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
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
