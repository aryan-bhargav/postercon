import { useParams, Link } from "react-router-dom";
import animeData from "../data/anime";
import moviesData from "../data/movies";
import artistsData from "../data/artists";
import carsData from "../data/cars";
import gamesData from "../data/games";
import "../App.css";

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
    <>
      

      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10"><br />
      <br />
      <br />
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 uppercase tracking-wide">
            Shop by {category.charAt(0).toUpperCase() + category.slice(1)}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2 text-lg">
            Discover posters from your favorite {category} collections
          </p>
        </div>

        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-7xl">
            {data.map((item, index) => (
              <Link
                key={index}
                to={`/category/${category}/${item.name.toLowerCase().replace(/\s+/g, "-")}`}
                className="relative w-40 h-64 bg-gray-900 dark:bg-gray-800 text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform transition-transform hover:scale-105"
              >
                {item.thumbnail && (
                  <>
                    <img
                      src={item.thumbnail}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    {/* Black fade overlay */}
                    <div className="absolute inset-0 bg-black/80 bg-opacity-30 hover:bg-opacity-10 transition-opacity rounded-xl"></div>
                  </>
                )}
                <div className="absolute inset-0 flex flex-col justify-end p-3 text-center z-10">
                  <h3 className="text-sm font-semibold truncate">{item.name}</h3>
                  <button className="mt-1 text-xs uppercase tracking-wider border border-white px-3 py-1 rounded hover:bg-white hover:text-black transition">
                    Explore
                  </button>
                </div>
              </Link>

            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryPage;
