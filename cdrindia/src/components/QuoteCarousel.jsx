import { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft , FaPause} from "react-icons/fa";

// Image imports
import image1 from "../assets/carousel/image1.png";
import image2 from "../assets/carousel/image2.png";
import image3 from "../assets/carousel/image3.png";

// Slide content
const slides = [
  {
    image: image1,
    quote: "The unexamined life is not worth living.",
    author: "— Socrates",
  },
  {
    image: image2,
    quote: "Happiness depends upon ourselves.",
    author: "— Aristotle",
  },
  {
    image: image3,
    quote: "I think, therefore I am.",
    author: "— René Descartes",
  },
];

const QuoteCarousel = () => {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hovering, setHovering] = useState(false);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (paused) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [paused]);

  return (
        <div
      className="relative w-screen h-[500px] overflow-hidden bg-white group"
      onMouseEnter={() => {
        setPaused(true);
        setHovering(true);
      }}
      onMouseLeave={() => {
        setPaused(false);
        setHovering(false);
      }}
    >
      {/* Slide Wrapper */}
      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-screen h-full flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover"
            />

            {/* Quote Content */}
            <div className="absolute inset-0 flex items-center justify-start px-10 z-20">
              <div>
                <p className="text-white text-xl md:text-3xl font-semibold italic mb-2">
                  “{slide.quote}”
                </p>
                <span className="text-white text-sm md:text-base mb-4 block">
                  {slide.author}
                </span>
                <button className="font-medium px-5 py-2 rounded hover:bg-orange-600 transition bg-orange-500 text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Inward Curvature using SVG */}
      <div className="absolute bottom-0 w-full overflow-hidden leading-[0] z-10">
        <svg
          className="relative block w-full h-[80px]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#ffffff"
            d="M0,0 C480,160 960,160 1440,0 L1440,320 L0,320 Z"
          ></path>
        </svg>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute bottom-25 right-6 flex gap-4 z-30">
        <button
          onClick={prevSlide}
          className="text-white text-2xl p-2 rounded-full hover:bg-white hover:text-orange-500 transition duration-400 border-white border-4"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="text-white text-2xl p-2 rounded-full hover:bg-white hover:text-orange-500 transition duration-400 border-white border-4"
        >
          <FaArrowRight />
        </button>
      </div>

      {/* Pause Icon on Hover */}
      {hovering && (
        <div className="absolute top-4 right-4 z-30 bg-white bg-opacity-60 rounded-full p-2">
          <FaPause className="text-orange-500 text-lg" />
        </div>
      )}
    </div>
  );
};

export default QuoteCarousel;
