import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const images = [
    "https://cdn.lazyshop.com/files/5359f73f-843b-4698-b32e-a415fd982659/product/77e06153d5df90b1343918fd699c99cd.jpeg?x-oss-process=style%2Fthumb",
    "https://cdn.lazyshop.com/files/5359f73f-843b-4698-b32e-a415fd982659/other/d5fffad4cae3edf4fa15548d1182c730.jpg?x-oss-process=style%2Fthumb",
    "https://cdn.lazyshop.com/files/5359f73f-843b-4698-b32e-a415fd982659/product/2e67ca34148c5a8709c59f9985f25e91.jpeg?x-oss-process=style%2Fthumb",
  ];

  const length = images.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="relative flex items-center justify-center w-96 h-64">
        {" "}
        {/* Fixed width and height set here */}
        <FaArrowLeft
          className="absolute left-0 z-10 text-3xl text-white cursor-pointer bg-black p-2 rounded-r-md opacity-60 hover:opacity-100"
          onClick={prevSlide}
        />
        {images.map((image, index) => {
          console.log(image);
          return (
            <div
              key={index} // Added key prop here
              className={`absolute w-full h-full transition-opacity duration-500 ${
                index === current ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`carousel-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
        <FaArrowRight
          className="absolute right-0 z-10 text-3xl text-white cursor-pointer bg-black p-2 rounded-l-md opacity-60 hover:opacity-100"
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}

export default ImageCarousel;
