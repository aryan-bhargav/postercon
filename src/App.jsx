import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./components/Cart/CheckoutPage";
import OrderConfirmationPage from "./components/Cart/OrderConfirmationPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AboutUs from "./pages/AboutUs";
import ScrollToTop from "./components/ScrollToTop";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <>
      <div className='bg-page text-page ' >
        <div className=" bg-page text-page  transition duration-300">
          <ScrollToTop/>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />

            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/category/:category" element={<CategoryPage />} />
            <Route path="/category/:category/:subcategory" element={<SubCategoryPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderConfirmationPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
