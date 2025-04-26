






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
      <CategoryList />
      <BestSelling/>
      <Collections/>
      <WhyChooseUs/>
      <FAQ/>
    </div>
  );
};

export default Home;
