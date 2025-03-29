import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // Function to update cart count
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };

    // Initial cart count load
    updateCartCount();

    // Listen for cart updates
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <header className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-black">
        Poster<span className="text-red-500">Con</span>
      </Link>

      <nav className="hidden md:flex space-x-6">
        <Link to="/" className="hover:text-red-500">Home</Link>
        <Link to="/collections" className="hover:text-red-500">Collections</Link>
        <Link to="/about" className="hover:text-red-500">About</Link>
        <Link to="/contact" className="hover:text-red-500">Contact</Link>
      </nav>

      {/* Cart Icon */}
      <div className="flex items-center space-x-4">
        <Link to="/cart" className="relative">
          <span className="text-2xl">🛒</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-2xl">☰</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
