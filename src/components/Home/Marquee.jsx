import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full overflow-hidden bg-black text-white py-3">
      <motion.div
        className="flex space-x-10 text-lg font-bold"
        animate={{ x: ["100%", "-100%"] }}
        transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
      >
        <span>🔥 Best Posters | 🎨 Unique Designs | 🚀 Limited Edition |</span>
        <span>🔥 Best Posters | 🎨 Unique Designs | 🚀 Limited Edition |</span>
      </motion.div>
    </div>
  );
};

export default Marquee;
