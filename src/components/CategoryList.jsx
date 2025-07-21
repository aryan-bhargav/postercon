import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "../App.css"


const categories = [
  {
    name: "Movies",
    image:
      "https://i.pinimg.com/736x/d8/9e/b0/d89eb04d03c62acb1d463d50db4560ce.jpg",
  },
  {
    name: "TV Shows",
    image:
      "https://images5.alphacoders.com/287/287897.jpg",
  },
  {
    name: "Artists",
    image:
      "https://i.pinimg.com/736x/bc/89/2d/bc892d3774a3a43318508adb0deb53aa.jpg",
  },
  {
    name: "Cars",
    image:
      "https://i.pinimg.com/736x/a4/89/ff/a489ff86c6cc2b817e36759eec53ca23.jpg",
  },
  {
    name: "Games",
    image:
      "https://i.pinimg.com/736x/9a/2c/1c/9a2c1c428752523b0a8c6a5cb65a386e.jpg",
  },
  {
    name: "Anime",
    image:
      "https://i.pinimg.com/736x/26/71/f5/2671f59e73927cc75aa039a7e55c0d76.jpg",
  },
];

const cardVariants = {
  hover: {
    scale: 1.05,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
};

const CategoryList = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-14 text-center">
      <h2 className="text-4xl font-extrabold uppercase tracking-wide mb-2 text-gray-900 dark:text-white">
        Shop by Categories
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-xl mx-auto mb-10">
        Browse posters from your favorite genres & themes
      </p>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-8"
        role="list"
      >
        {categories.map(({ name, image }) => (
          <motion.div
            key={name}
            variants={cardVariants}
            whileHover="hover"
            className="relative rounded-xl overflow-hidden shadow-2xl group"
            role="listitem"
            aria-label={`Browse ${name} posters`}
          >
            <Link
              to={`/category/${name.toLowerCase().replace(/\s+/g, "-")}`}
              className="block w-full h-72 sm:h-80 md:h-96 lg:h-[28rem]"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-105"
                style={{ backgroundImage: `url(${image})` }}
              />

              {/* Stronger Black Fade Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent opacity-90" />

              {/* Category Name at bottom-left */}
              <div className="absolute bottom-5 left-5 text-white text-2xl md:text-3xl font-extrabold drop-shadow-xl tracking-wider select-none">
                {name}
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default CategoryList;
