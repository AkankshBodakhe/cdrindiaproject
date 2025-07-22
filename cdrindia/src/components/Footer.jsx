import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1c1c1c] text-white px-6 py-20 relative">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-gray-700 pb-12">
        {/* Our Address */}
        <div>
          <h2 className="text-[1.25rem] md:text-[1.375rem] font-semibold mb-4">
            <span className="inline-block border-b border-gray-400 pb-1">
              Our Address
            </span>
          </h2>
          <p className="text-gray-300 leading-relaxed text-[0.95rem]">
            ‘Geetashree ‘, Plot No. 60,<br />
            Nehru Nagar, Khamla Road,<br />
            Nagpur – 440015
          </p>
        </div>

        {/* Call Us */}
        <div className="md:border-l border-gray-600 pl-6">
          <h2 className="text-[1.25rem] md:text-[1.375rem] font-semibold mb-4">
            <span className="inline-block border-b border-gray-400 pb-1">
              Call Us
            </span>
          </h2>
          <p className="text-gray-300 text-[0.95rem]">Mon – Sat 10:30 – 18:00</p>
          <a
            href="tel:+919823230409"
            className="text-gray-300 mt-1 text-[0.95rem] hover:text-white block"
          >
            +91 9823230409
          </a>
        </div>

        {/* Mail Us */}
        <div className="md:border-l border-gray-600 pl-6">
          <h2 className="text-[1.25rem] md:text-[1.375rem] font-semibold mb-4">
            <span className="inline-block border-b border-gray-400 pb-1">
              Mail Us
            </span>
          </h2>
          <a
            href="mailto:cdrfforindia@gmail.com"
            className="text-gray-300 break-words text-[0.95rem] hover:text-white"
          >
            cdrfforindia@gmail.com
          </a>
        </div>

        {/* Follow Us */}
        <div className="md:border-l border-gray-600 pl-6">
          <h2 className="text-[1.25rem] md:text-[1.375rem] font-semibold mb-4">
            <span className="inline-block border-b border-gray-400 pb-1">
              Follow Us On
            </span>
          </h2>
          <div className="flex space-x-4 mt-2">
            <FaFacebookF className="text-2xl hover:text-blue-500 cursor-pointer" />
            <FaInstagram className="text-2xl hover:text-pink-500 cursor-pointer" />
            <FaTwitter className="text-2xl hover:text-blue-400 cursor-pointer" />
            <FaYoutube className="text-2xl hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-gray-400 text-[0.85rem] md:text-sm px-2">
        <div className="text-center md:text-left">
          <p>
            Design & Developed by{" "}
            <span className="font-semibold text-white">
              Akanksh Bodakhe & Prachi Mahajan
            </span>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold text-white">Manisha Systems</span>. All rights reserved.
          </p>
        </div>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white">Privacy Policy</a>
          <a href="#" className="hover:text-white">Disclaimer</a>
        </div>
      </div>



      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 bg-white text-black rounded-full p-3 shadow-lg hover:bg-gray-200 transition"
        aria-label="Scroll to Top"
      >
        <FaArrowUp className="text-lg" />
      </button>
    </footer>
  );
};

export default Footer;