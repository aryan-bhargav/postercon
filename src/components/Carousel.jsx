import { useState, useEffect, useRef } from "react";
import ad1 from "../assets/carousel/AD1.jpg";
import ad2 from "../assets/carousel/AD2.jpg";

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
    intervalRef.current = setInterval(nextSlide, 5000);
  };

  const pauseAutoPlay = () => clearInterval(intervalRef.current);

  return (
    <div
      className="relative w-full mx-auto overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={pauseAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      {/* Slide */}
      <div className="w-full aspect-[16/7] sm:aspect-[16/6] md:aspect-[16/5] lg:aspect-[16/4] relative">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-full object-cover transition-opacity duration-700"
        />
        {/* Fade Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent pointer-events-none" />
      </div>

      {/* Arrows */}
      <button
        className="absolute left-4 top-1/2 -translate-y-1/2 group"
        onClick={prevSlide}
        aria-label="Previous"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur flex items-center justify-center text-white transition-all group-hover:bg-white/30">
          <span className="text-xl group-hover:-translate-x-1 transition-transform duration-300">←</span>
        </div>
      </button>

      <button
        className="absolute right-4 top-1/2 -translate-y-1/2 group"
        onClick={nextSlide}
        aria-label="Next"
      >
        <div className="w-10 h-10 rounded-full bg-white/20 dark:bg-black/30 backdrop-blur flex items-center justify-center text-white transition-all group-hover:bg-white/30">
          <span className="text-xl group-hover:translate-x-1 transition-transform duration-300">→</span>
        </div>
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full transition ${
              current === index
                ? "bg-white scale-125 shadow"
                : "bg-gray-400 dark:bg-gray-600"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
