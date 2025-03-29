import { motion } from "framer-motion";

const collections = [
  { name: "Superhero", image: "/posters/superhero.jpg" },
  { name: "Movie", image: "/posters/movie.jpg" },
  { name: "Formula 1", image: "/posters/f1.jpg" },
  { name: "Quotes", image: "/posters/quotes.jpg" },
  { name: "Music", image: "/posters/music.jpg" },
];

const Collections = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold uppercase tracking-wide">Collections</h2>
      <p className="text-gray-500 text-sm">Your style, your collection. Find the perfect poster sets!</p>

      <div className="flex justify-center gap-5 mt-8 overflow-hidden">
        {collections.map((item, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotateY: 10 }}
            whileTap={{ scale: 0.95 }}
            className="relative w-48 md:w-56 lg:w-64 h-80 bg-black text-white rounded-lg overflow-hidden shadow-lg cursor-pointer"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-40">
              <h3 className="text-xl font-bold">{item.name} Posters</h3>
              <button className="mt-2 text-sm uppercase tracking-wide border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
