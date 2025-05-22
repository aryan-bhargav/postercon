import { useState } from "react";
import "../App.css"
const PosterCard = ({ name, path, price, originalPrice, sizeOptions }) => {
  const [selectedSize, setSelectedSize] = useState(sizeOptions[0]);
  const [quantity, setQuantity] = useState(1);
  const [showNotification, setShowNotification] = useState(false);

  const addToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the same poster (same name & size) already exists in the cart
    const existingItem = cart.find((item) => item.name === name && item.size === selectedSize.label);

    if (existingItem) {
      // Increase quantity if already in cart
      existingItem.quantity += quantity;
    } else {
      // Add new item with selected quantity
      cart.push({
        name,
        path,
        price: selectedSize.price,
        size: selectedSize.label,
        quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    // Show notification
    setShowNotification(true);

    // Hide after 3 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    // Dispatch event to update cart count in header
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg relative">
      {/* Poster Image */}
      <div className="relative w-full overflow-hidden" style={{ aspectRatio: "210 / 297" }}>
        <img src={path} alt={name} className="w-full h-full object-cover rounded-md" loading="lazy" />
      </div>

      {/* Sale Badge */}
      {originalPrice && (
        <span className="absolute top-3 left-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
          Sale
        </span>
      )}

      {/* Poster Title */}
      <h3 className="mt-3 text-sm text-gray-700">{name}</h3>

      {/* Pricing */}
      <div className="flex items-center space-x-2 mt-1">
        {originalPrice && <span className="text-gray-400 line-through text-sm">Rs. {originalPrice}</span>}
        <span className="text-lg font-semibold">From Rs. 99</span>
      </div>

      {/* Size Selection Dropdown */}
      <select
        className="w-full mt-2 p-2 border rounded text-sm"
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

      {/* Quantity Selector with + / - Buttons */}
      <div className="flex flex-wrap justify-center items-center mt-2">
        <span className="text-sm mr-2">Quantity:</span>
        <div  className="flex items-center">
          <button
            className="px-3 py-1 bg-gray-200 text-black rounded-l-md"
            onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
          >-</button>
          <input
            type="text"
            className="w-8  p-1 border text-center text-sm"
            value={quantity}
            readOnly
          />
          <button
            className="px-3 py-1 bg-gray-200 text-black rounded-r-md"
            onClick={() => setQuantity((prev) => prev + 1)}
          >
            +
          </button>
        </div>

      </div>

      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        className="w-full bg-black text-white py-2 mt-3 rounded-md font-semibold hover:opacity-90"
      >
        Add to cart
      </button>

      {/* Floating Notification */}
      {showNotification && (
        <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2 rounded-md shadow-lg z-[1000] animate-fadeInOut">
          ✅ {name} ({selectedSize.label}) x {quantity} added to cart!
        </div>
      )}
    </div>
  );
};

export default PosterCard;
