const CategoryListHome = () => {
    const categories = [
      { name: "Custom Poster", image: "/categories/custom.jpg" },
      { name: "Superhero Collections", image: "/categories/superhero.jpg" },
      { name: "Car Collections", image: "/categories/cars.jpg" },
      { name: "Movie Collections", image: "/categories/movies.jpg" },
      { name: "TV-Series Collections", image: "/categories/tv-series.jpg" },
      { name: "Music Collections", image: "/categories/music.jpg" },
      { name: "Video Game Collections", image: "/categories/games.jpg" },
      { name: "Motivate Collections", image: "/categories/motivation.jpg" },
      { name: "Cricket Collections", image: "/categories/cricket.jpg" },
      { name: "Football Collections", image: "/categories/football.jpg" },
      { name: "F1 Collections", image: "/categories/f1.jpg" },
      { name: "Explore More!", image: "/categories/explore.jpg" },
    ];
  
    return (
      <div className="w-2/3 overflow-x-auto scrollbar-hide py-4">
        <div className="flex space-x-6 px-4">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col items-center min-w-[90px] md:min-w-[120px]">
              <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shadow-lg border border-gray-300">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-center text-xs md:text-sm font-semibold mt-2">{category.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default CategoryListHome;
  