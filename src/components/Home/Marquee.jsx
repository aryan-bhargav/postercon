import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden h-7 sm:h-7 md:h-8 lg:h-10 bg-black text-white py-3">
      <motion.div
        className="flex space-x-10 text-sm font-bold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
      >
        <span>🔥 Best Posters | 🎨 Unique Designs | 🚀 Limited Edition |</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
