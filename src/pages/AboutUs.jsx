import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <>
      <br />
      <br />
      <br />
      <motion.div
        className="min-h-screen px-6 py-16 bg-page text-page flex flex-col items-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl w-full text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">About PosterCon</h1>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            At <span className="text-blue-600 dark:text-blue-400 font-semibold">PosterCon</span>, we bring stories to your walls.
            From iconic movies to legendary anime, we design and deliver high-quality posters that resonate with fans worldwide.
          </p>
          <p className="text-lg sm:text-xl mb-4 leading-relaxed">
            Whether you're a collector, creator, or casual fan, PosterCon is your go-to place for handpicked visual gems.
          </p>
          <p className="text-lg sm:text-xl leading-relaxed">
            We're passionate about pop culture and obsessed with print perfection.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl w-full">
          <motion.div
            className="bg-blue-100 dark:bg-blue-900 p-6 rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Our Mission</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Deliver high-quality, unique posters to every fan’s doorstep.
            </p>
          </motion.div>

          <motion.div
            className="bg-green-100 dark:bg-green-900 p-6 rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Our Vision</h3>
            <p className="text-gray-700 dark:text-gray-200">
              To be the #1 platform for pop culture art and design lovers.
            </p>
          </motion.div>

          <motion.div
            className="bg-yellow-100 dark:bg-yellow-900 p-6 rounded-2xl shadow-md"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-bold mb-2">Our Promise</h3>
            <p className="text-gray-700 dark:text-gray-200">
              Premium prints. Fast shipping. Fan-focused service.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default AboutUs;
