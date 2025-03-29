import { Link } from "react-router-dom";

const categories = ["Movies", "TV Shows", "Artists", "Cars", "Games", "Anime"];

const CategoryList = () => {
  return (
    <div className="text-center py-10">
      <h2 className="text-3xl font-bold uppercase tracking-wide">Shop by Categories</h2>
      <p className="text-gray-500 text-sm">Browse posters from your favorite genres & themes</p>

      <div className="flex flex-wrap justify-center gap-5 mt-8">
        {categories.map((category) => (
          <Link
            key={category}
            to={`/category/${category.toLowerCase()}`}
            className="relative w-48 md:w-56 lg:w-64 h-40 bg-gray-900 text-white rounded-lg overflow-hidden shadow-lg cursor-pointer flex items-center justify-center text-xl font-bold uppercase tracking-wide transition-transform hover:scale-105"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
