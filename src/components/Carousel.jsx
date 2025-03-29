import { useState } from "react";
import ad1 from "../assets/carousel/AD1.jpg";
import ad2 from "../assets/carousel/AD2.jpg"; // Add more images if needed

const Carousel = () => {
  const images = [ad1, ad2]; // Use imported images
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full mx-auto overflow-hidden">
      {/* Image Container - Full Width */}
      <div className="w-full h-2/3 aspect-[16/7] md:aspect-[16/5] lg:aspect-[16/4] overflow-hidden">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-auto object-cover transition-all duration-500"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        onClick={prevSlide}
      >
        ◀
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        onClick={nextSlide}
      >
        ▶
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${current === index ? "bg-white scale-110" : "bg-gray-500"}`}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
