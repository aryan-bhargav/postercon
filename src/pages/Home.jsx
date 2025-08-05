import "../App.css"
import Carousel from "../components/Carousel";
import CategoryListHome from "../components/Home/CategoryListHome";
import CategoryList from "../components/CategoryList";
import Marquee from "../components/Home/Marquee";
import BestSelling from "../components/Home/BestSelling"
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FAQ from "../components/Home/FAQ";
import InfiniteMovingCards from "../components/Home/InfiniteMovingCards"
const Home = () => {
  const images = [
    "/banners/offer1.jpg",
    "/banners/offer2.jpg",
    "/banners/offer3.jpg"
  ];

  return (
    <div className="bg-white text-gray-900 dark:bg-black/95 dark:text-gray-100 transition-colors duration-500">
      <Carousel images={images} />
      <Marquee/>
      <CategoryList />
      <BestSelling/>
      <WhyChooseUs/>
      <FAQ/>
      <InfiniteMovingCards speed={40}/>
    </div>
  );
};

export default Home;
