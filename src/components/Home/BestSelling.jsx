import PosterCard from "../PosterCard";

const BestSelling = () => {
  const bestSellingPosters = [
    {
      name: "Porsche 911 GT3 RS #01 | CAR SET | 5 Piece Set",
      path: "/posters/cars/porsche-911-gt3-rs-01.jpg",
      price: "399.00",
      originalPrice: "499.00",
      sizeOptions: [
        { label: "Small", value: "small", price: "399.00" },
        { label: "Medium", value: "medium", price: "499.00" },
        { label: "Large", value: "large", price: "599.00" },
      ],
    },
    {
      name: "Porsche 911 GT3 RENNSPORT #01 | CAR SET | 5 Piece Set",
      path: "/posters/cars/porsche-911-gt3-rennsport.jpg",
      price: "399.00",
      originalPrice: "499.00",
      sizeOptions: [
        { label: "Small", value: "small", price: "399.00" },
        { label: "Medium", value: "medium", price: "499.00" },
        { label: "Large", value: "large", price: "599.00" },
      ],
    },
    {
      name: "BABA YAGA BOSS x 1969 FORD MUSTANG | Car Set | 3 Piece Set",
      path: "/posters/cars/baba-yaga-mustang.jpg",
      price: "299.00",
      originalPrice: "399.00",
      sizeOptions: [
        { label: "Small", value: "small", price: "299.00" },
        { label: "Medium", value: "medium", price: "399.00" },
        { label: "Large", value: "large", price: "499.00" },
      ],
    },
    {
      name: "VINTAGE SOUL X FORD MUSTANG 1969 | CAR SET | 3 Piece Set",
      path: "/posters/cars/vintage-mustang.jpg",
      price: "299.00",
      originalPrice: "399.00",
      sizeOptions: [
        { label: "Small", value: "small", price: "299.00" },
        { label: "Medium", value: "medium", price: "399.00" },
        { label: "Large", value: "large", price: "499.00" },
      ],
    },
    {
      name: "LAND ROVER DEFENDER 130 OUTBOUND | Car Set | 3 Piece Set",
      path: "/posters/cars/land-rover-defender.jpg",
      price: "299.00",
      originalPrice: "399.00",
      sizeOptions: [
        { label: "Small", value: "small", price: "299.00" },
        { label: "Medium", value: "medium", price: "399.00" },
        { label: "Large", value: "large", price: "499.00" },
      ],
    },
  ];

  return (
    <section className="w-full py-10">
      {/* Section Title */}
      <h2 className="text-center text-3xl font-bold mb-8">
        <span className="text-black">BEST</span>{" "}
        <span className="text-red-600">SELLING</span>
      </h2>

      {/* Poster Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 px-4">
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
