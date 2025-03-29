






import Carousel from "../components/Carousel";
import CategoryListHome from "../components/Home/CategoryListHome";
import CategoryList from "../components/CategoryList";
import Marquee from "../components/Home/Marquee";
import BestSelling from "../components/Home/BestSelling"
import Collections from "../components/Home/Collections";
import WhyChooseUs from "../components/Home/WhyChooseUs";
import FAQ from "../components/Home/FAQ";

const Home = () => {
  const images = [
    "/banners/offer1.jpg",
    "/banners/offer2.jpg",
    "/banners/offer3.jpg"
  ];

  return (
    <div>
      <Carousel images={images} />
      <Marquee/>
      <CategoryListHome/>
      <BestSelling/>
      <Collections/>
      <WhyChooseUs/>
      <FAQ/>
      <h2 className="text-2xl font-bold mt-6 p-4">Shop by Categories</h2>
      <CategoryList />
    </div>
  );
};

export default Home;
