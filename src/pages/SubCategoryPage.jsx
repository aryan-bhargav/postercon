import { useParams } from "react-router-dom";
import PosterCard from "../components/PosterCard";
import animeData from "../data/anime";
import artistsData from "../data/artists";
import moviesData from "../data/movies";
import carsData from "../data/cars";
import gamesData from "../data/games";
import "../App.css";


const subCategoryData = {
  anime: animeData,
  movies: moviesData,
  artists: artistsData,
  games: gamesData,
  cars: carsData,
};

const SubCategoryPage = () => {
  const { category, subcategory } = useParams();
  const posters =
    subCategoryData[category]?.find(
      (item) => item.name.toLowerCase().replace(/\s+/g, "-") === subcategory
    )?.posters || [];

  return (
    <>
      <br />
      <br />
      <br />
      
      <div className="p-6 w-full flex flex-col items-center bg-gray-50 dark:bg-gray-900 min-h-screen">
        <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">
          {subcategory.replace(/-/g, " ")} Posters
        </h1>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {posters.map((poster, index) => (
            <PosterCard
              key={index}
              name={poster.name}
              path={poster.path}
              originalPrice={poster.originalPrice || null} // Prevent undefined error
              price={poster.price || "99"} // Provide fallback value
              sizeOptions={[
                { label: "A3", value: "a3", price: 99 }
              ]}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default SubCategoryPage;
