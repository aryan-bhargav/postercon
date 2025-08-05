import PosterCard from "../PosterCard";
import bestSelling from "../../data/bestSelling";

const BestSelling = () => {
  const bestSellingPosters = bestSelling;

  return (
    <section className="w-full py-14 px-4 sm:px-6 lg:px-16 transition-colors duration-300">
      {/* Section Title */}
      <h2 className="text-center text-3xl sm:text-4xl font-extrabold mb-10">
        <span className="text-black dark:text-white">BEST</span>{" "}
        <span className="text-red-600">SELLING</span>
      </h2>

      {/* Poster Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {bestSellingPosters.map((poster, index) => (
          <PosterCard key={index} {...poster} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
