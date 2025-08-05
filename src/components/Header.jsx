import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import ThemeToggler from "./ThemeToggler";
import "../App.css";

const navItems = [
  { name: "Home", link: "/" },
  { name: "About", link: "/about-us" },
  { name: "Contact", link: "/contact" },
];

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  const ref = useRef(null);
  const { scrollY } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const [visible, setVisible] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [hovered, setHovered] = useState(null);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setVisible(latest > 100);
  });

  useEffect(() => {
    const updateCartCount = () => {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setCartCount(cart.length);
    };
    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);
    return () => window.removeEventListener("cartUpdated", updateCartCount);
  }, []);

  return (
    <motion.header
      ref={ref}
      className={cn(
        "fixed left-4 right-4 z-50 mx-auto max-w-7xl px-4 py-3 rounded-xl transition-all duration-300 backdrop-blur-md bg-gray-100/70  dark:bg-gray-950/80",
        visible ? "top-0 shadow-2xl" : "top-4 shadow-md"
      )}
      initial={false}
      animate={{ y: 0 }} // optional
    >


      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-page">
          <img
            src="/logo.png"
            alt="logo"
            width={100}
            height={100}
            className="invert dark:none"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex space-x-6 font-medium text-neutral-600 dark:text-neutral-300">
          {navItems.map((item, idx) => (
            <Link
              key={item.name}
              to={item.link}
              className="relative px-4 py-2 rounded-full hover:text-red-500"
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hoverBg"
                  className="absolute inset-0 rounded-full bg-gray-100 dark:bg-neutral-800"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          ))}
        </nav>

        {/* Cart + Theme Toggle + Mobile Menu */}
        <div className="flex items-center space-x-4">
          <ThemeToggler />

          <Link to="/cart" className="relative text-2xl text-page">
            <FaShoppingCart />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
                {cartCount}
              </span>
            )}
          </Link>

          <button
            className="lg:hidden text-2xl text-page"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            className="lg:hidden bg-white dark:bg-neutral-900 px-4 py-6 mt-4 top-4 rounded-xl shadow-lg"
          >
            <ul className="flex flex-col space-y-4 font-medium text-neutral-700 dark:text-neutral-300">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.link}
                    onClick={() => setMobileOpen(false)}
                    className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-neutral-800"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
