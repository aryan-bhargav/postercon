import PosterCard from "../PosterCard";
import bestSelling from "../../data/bestSelling"


const BestSelling = () => {
  const bestSellingPosters = bestSelling;

  return (
    <section className="w-full py-10">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-8">
        <span className="dark:text-white text-black">BEST</span>{" "}
        <span className="text-red-600">SELLING</span>
      </h2>

      {/* Poster Grid */}
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 overflow-auto px-4">
        {bestSellingPosters.map((poster, index) => (
          <PosterCard key={index} {...poster} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-6">
        <button className="bg-black text-white py-2 px-6 rounded-md font-semibold hover:opacity-90">
          View all
        </button>
      </div>
    </section>
  );
};

export default BestSelling;
