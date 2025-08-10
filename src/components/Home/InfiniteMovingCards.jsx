import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const reviews = [
  { name: "Kartik", review: "Absolutely loved the Jujutsu Kaisen poster! High quality print and perfect size." },
  { name: "Sneha", review: "The Marvel collection is insane. Got Iron Man, and it looks stunning on my wall!" },
  { name: "Shankar", review: "Fast delivery and excellent packaging. The Tokyo Ghoul poster is my favorite now." },
  { name: "Mira", review: "Vibrant colors and premium paper. Got compliments from friends visiting my room!" },
  { name: "Ankit", review: "Big fan of PosterCon now. The Anime section is 🔥🔥🔥" },
  { name: "Priya", review: "Highly recommend the Music posters. Great vibe and aesthetics." },
];

const InfiniteMovingCards = ({ speed = 30 }) => {
  const controls = useAnimation();
  const containerRef = useRef(null);

  useEffect(() => {
    const animate = async () => {
      while (true) {
        await controls.start({
          x: "-100%",
          transition: { duration: speed, ease: "linear" },
        });
        controls.set({ x: "0%" });
      }
    };
    animate();
  }, [controls, speed]);

  return (
    <div className="relative w-full overflow-hidden py-8 text-page">
      
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-white dark:from-black to-transparent z-10" />
      
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-white dark:from-black to-transparent z-10" />

      <motion.div className="flex gap-6" animate={controls} ref={containerRef}>
        {[...reviews, ...reviews].map((review, index) => (
          <div
            key={index}
            className="flex-shrink-0 rounded-2xl shadow-lg border border-gray-300 dark:border-neutral-700 backdrop-blur-md px-6 py-4  text-black dark:text-white min-w-[250px] max-w-xs sm:min-w-[280px] sm:max-w-sm md:min-w-[320px] md:max-w-md lg:min-w-[380px] lg:max-w-lg"
          >
            <p className="text-sm italic mb-2">{`"${review.review}"`}</p>
            <p className="text-right text-xs text-gray-600 dark:text-gray-400">– {review.name}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default InfiniteMovingCards;
