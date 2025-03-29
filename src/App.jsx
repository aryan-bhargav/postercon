import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CategoryPage from "./pages/CategoryPage";
import SubCategoryPage from "./pages/SubCategoryPage";
import Header from "./components/Header"
import Footer from "./components/Footer"
import CartPage from "./components/Cart/CartPage"
import CheckoutPage from "./components/Cart/CheckoutPage"
import OrderConfirmationPage from "./components/Cart/OrderConfirmationPage"

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<CategoryPage />} />
        <Route path="/category/:category/:subcategory" element={<SubCategoryPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/order-success" element={<OrderConfirmationPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
