import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo/logo.png'; // Adjust the path as necessary

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md h-[123.33px]">
      <div className="container mx-auto flex justify-between items-center px-6 h-full">
        {/* Logo and Title */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="Centre for Development Research"
            className="w-[140px] h-[123.33px] object-contain"
          />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6 font-['Segoe_UI',sans-serif]">
          {[
            { label: 'Home', href: '/', color: 'text-orange-500' },
            { label: 'Who We Are?', href: '/who-we-are' },
            { label: 'What We Do?', href: '/what-we-do' },
            { label: 'Events', href: '/events' },
            { label: 'Gallery', href: '/gallery' },
            { label: 'Blog', href: '/blog' },
            { label: 'Contact', href: '/contact' },
          ].map(({ label, href, color = 'text-[#3B3663]' }) => (
            <a
              key={label}
              href={href}
              className={`relative group ${color} hover:text-red-500 pb-1 text-[19px] font-[400]`}
            >
              {label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4 text-orange-600">
          {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, i) => (
            <a
              key={i}
              href={['https://facebook.com', 'https://instagram.com', 'https://twitter.com', 'https://youtube.com'][i]}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-300 ease-in-out hover:text-white"
            >
              <Icon size={35} />
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
