import { useState } from "react";
import "../App.css";

const PosterCard = ({ name, path, price, originalPrice, sizeOptions }) => {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItem = cart.find(
      (item) => item.name === name && item.size === selectedSize.label
    );

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        name,
        path,
        price: selectedSize.price,
        size: selectedSize.label,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="p-4  bg-white dark:bg-gray-800 shadow-md dark:shadow-gray-700 rounded-lg relative">
      {/* Poster Image */}
      <div
        className="relative w-full overflow-hidden"
        style={{ aspectRatio: "210 / 297" }}
      >
        <img
          src={path}
          alt={name}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>

      {/* Sale Badge */}
      {originalPrice && (
        <span className="absolute top-3 left-3 bg-black dark:bg-gray-900 text-white text-xs font-semibold px-2 py-1 rounded">
          Sale
        </span>
      )}

      {/* Poster Title */}
      <h3 className="mt-3 text-sm text-gray-700 dark:text-gray-200">{name}</h3>

      {/* Pricing */}
      <div className="flex items-center space-x-2 mt-1">
        {originalPrice && (
          <span className="text-gray-400 dark:text-gray-500 line-through text-sm">
            Rs. {originalPrice}
          </span>
        )}
        <span className="text-lg font-semibold text-black dark:text-white">
          From Rs. 99
        </span>
      </div>

      {/* Size Selection Dropdown */}
      <select
        className="w-full mt-2 p-2 border border-gray-300 dark:border-gray-600 rounded text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
        value={selectedSize.value}
        onChange={(e) =>
          setSelectedSize(sizeOptions.find((size) => size.value === e.target.value))
        }
      >
        {sizeOptions.map((size, index) => (
          <option key={index} value={size.value}>
            {size.label} - Rs. {size.price}
          </option>
        ))}
      </select>

      {/* Quantity Selector */}
      <div className="flex flex-wrap justify-center items-center mt-2">
        <span className="text-sm mr-2 text-gray-700 dark:text-gray-300">Quantity:</span>
        <div className="flex items-center">
          <button
            className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-black dark:text-white rounded-l-md"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >
            -
          </button>
          <input
            type="text"
            className="w-8 p-1 border border-gray-300 dark:border-gray-600 text-center text-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            value={quantity}
            readOnly
          />
          <button
            className="px-3 py-1 bg-gray-200 dark:bg-gray-600 text-black dark:text-white rounded-r-md"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        className="w-full bg-black dark:bg-white dark:text-black text-white py-2 mt-3 rounded-md font-semibold hover:opacity-90 transition"
      >
        Add to cart
      </button>

      {/* Floating Notification */}
      {showNotification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md shadow-lg z-[1000] animate-fadeInOut">
          ✅ {name} ({selectedSize.label}) x {quantity} added to cart!
        </div>
      )}
    </div>
  );
};

export default PosterCard;
