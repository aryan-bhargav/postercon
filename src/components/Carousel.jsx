import { useState, useEffect, useRef } from "react";
import ad1 from "../assets/carousel/AD1.jpg";
import ad2 from "../assets/carousel/AD2.jpg";
import "../App.css";

const Carousel = () => {
  const images = [ad1, ad2];
  const [current, setCurrent] = useState(0);
  const intervalRef = useRef(null);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  useEffect(() => {
    startAutoPlay();
    return () => clearInterval(intervalRef.current);
  }, []);

  const startAutoPlay = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(nextSlide, 7000);
  };

  const pauseAutoPlay = () => clearInterval(intervalRef.current);

  return (
    <div
      className="relative bg-page overflow-hidden mx-auto 
                 w-full max-w-md h-auto rounded-lg 
                 sm:max-w-full sm:h-screen"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Image */}
      <div className="relative w-full h-full">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-auto sm:h-full object-cover object-top transition-opacity duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent" />
      </div>

      {/* Overlay Text */}
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 text-white">
        <div className="flex justify-between items-start">
          <div className="space-y-2 max-w-xl">
            <div className="text-xl md:text-2xl">★★★★</div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <button
        className="absolute left-3 top-1/2 -translate-y-1/2 z-10 group"
        onClick={prevSlide}
        aria-label="Previous"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur flex items-center justify-center text-white transition-all group-hover:bg-white/30">
          <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">
            <img src="/previous.png" alt="" />

          </span>
        </div>
      </button>

      <button
        className="absolute right-3 top-1/2 -translate-y-1/2 z-10 group"
        onClick={nextSlide}
        aria-label="Next"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur flex items-center justify-center text-white transition-all group-hover:bg-white/30">
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">
            <img src="/next.png" alt="" />
          </span>
        </div>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-white scale-125 shadow" : "bg-gray-400 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
