import React, { useState, useEffect, useRef } from "react";
import { IoChevronBackOutline, IoChevronForwardOutline } from "react-icons/io5";
import "tailwindcss/tailwind.css";

const images = [
  "https://images-static.nykaa.com/uploads/18e02432-b650-402e-a610-2f2525051a94.jpg?tr=cm-pad_resize,w-1200",
  "https://images-static.nykaa.com/uploads/bc40129f-f00b-40de-a557-424cd781b783.jpg?tr=cm-pad_resize,w-1200",
  "https://images-static.nykaa.com/uploads/fe1ed0b3-5fc3-487f-8aab-652a3e47d253.jpg?tr=cm-pad_resize,w-1200",
  "https://images-static.nykaa.com/uploads/e71a4a8b-164e-496c-88ba-7462a6723f8c.jpg?tr=cm-pad_resize,w-1200",
];

const HeadSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef(null);
  const transitionDuration = 700; // Transition duration in milliseconds

  const totalSlides = images.length;
  const slides = [images[totalSlides - 1], ...images, images[0]];

  useEffect(() => {
    const nextSlide = () => {
      if (!isAnimating) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    };

    timeoutRef.current = setTimeout(nextSlide, 3000);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    if (currentIndex === totalSlides + 1) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(1);
      }, transitionDuration);
    } else if (currentIndex === 0) {
      setTimeout(() => {
        setIsAnimating(false);
        setCurrentIndex(totalSlides);
      }, transitionDuration);
    } else {
      setIsAnimating(false);
    }
  }, [currentIndex, totalSlides]);

  const prevSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex - 1);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = () => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex((prevIndex) => prevIndex + 1);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const setSlide = (index) => {
    if (isAnimating) return;

    setIsAnimating(true);
    setCurrentIndex(index + 1);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  return (
    <div className="w-full flex justify-center px-3 md:px-8 pt-2 rounded-md items-center">
      <div className="relative w-full rounded-md ">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform ease-in-out"
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
              transitionDuration: isAnimating
                ? `${transitionDuration}ms`
                : "0ms",
            }}
          >
            {slides.map((image, index) => (
              <div key={index} className="min-w-full">
                <img
                  src={image}
                  alt={`Slide ${index}`}
                  className="w-full  h-auto object-contain"
                />
              </div>
            ))}
          </div>
          <div className="absolute inset-0 flex items-center justify-between px-4">
            <button
              onClick={prevSlide}
              className="text-white bg-gray-800 bg-opacity-50 p-2 rounded-full"
            >
              <IoChevronBackOutline size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="text-white bg-gray-800 bg-opacity-50 p-2 rounded-full"
            >
              <IoChevronForwardOutline size={24} />
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index + 1 === currentIndex ||
                  (index === 0 && currentIndex === totalSlides + 1) ||
                  (index === totalSlides - 1 && currentIndex === 0)
                    ? "bg-white"
                    : "bg-gray-500"
                }`}
                onClick={() => setSlide(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadSlider;
