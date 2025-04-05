import { useParams, Link } from "react-router-dom";
import animeData from "../data/anime";
import moviesData from "../data/movies";
import artistsData from "../data/artists";
import carsData from "../data/cars";
import gamesData from "../data/games"

const categoryData = {
  anime: animeData,
  movies: moviesData,
  artists: artistsData,
  cars: carsData,
  games: gamesData,
};

const CategoryPage = () => {
  const { category } = useParams();
  const data = categoryData[category] || [];

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold text-gray-900 uppercase tracking-wide">
          Shop by {category.charAt(0).toUpperCase() + category.slice(1)}
        </h1>
        <p className="text-gray-600 mt-2 text-lg">
          Discover posters from your favorite {category} collections
        </p>
      </div>

      <div className="flex justify-center mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl">
          {data.map((item, index) => (
            <Link
              key={index}
              to={`/category/${category}/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
              className="relative w-44 h-96 md:w-72 lg:w-80 bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg transform transition-transform hover:scale-105"
            >
              {item.image && ( // ✅ Fix: Check if "image" exists before rendering
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                />
              )}
              <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
                <h3 className="text-xl font-bold">{item.name}</h3>
                <button className="mt-2 text-sm uppercase tracking-wide border border-white px-4 py-1 rounded hover:bg-white hover:text-black transition">
                  Explore
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;
