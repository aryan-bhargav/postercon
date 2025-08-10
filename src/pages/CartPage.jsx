import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateQuantity = (index, newQty) => {
    if (newQty < 1) return;
    const updatedCart = cart.map((item, i) =>
      i === index ? { ...item, quantity: newQty } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce(
    (sum, item) => sum + (parseFloat(item.price) || 0) * (item.quantity || 1),
    0
  );

  const totalPosters = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  const calculateDeliveryCharge = () => {
    if (totalPosters <= 3 && totalAmount <= 297) {
      return 50;
    }
    return 0;
  };

  const deliveryCharge = calculateDeliveryCharge();
  const grandTotal = totalAmount + deliveryCharge;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8">
          🛒 Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              Your cart is empty.
            </p>
            <Link
              to="/"
              className="mt-4 inline-block px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold hover:scale-105 transform transition"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row sm:items-center justify-between bg-white dark:bg-gray-800 rounded-2xl p-5 shadow-md hover:shadow-lg transition"
                >
                  <div className="flex items-center gap-5 flex-1">
                    <img
                      src={item.path}
                      alt={item.name}
                      className="w-20 h-24 rounded-lg object-cover border border-gray-200 dark:border-gray-700"
                    />
                    <div className="flex flex-col gap-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        Size: {item.size}
                      </p>
                      <p className="font-bold text-gray-900 dark:text-white">
                        ₹ {item.price}
                      </p>

                      {/* Quantity Selector */}
                      <div className="flex items-center mt-2 border rounded-lg overflow-hidden w-fit">
                        <button
                          onClick={() =>
                            updateQuantity(index, (item.quantity || 1) - 1)
                          }
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          -
                        </button>
                        <span className="px-4 py-1 bg-gray-100 dark:bg-gray-600 text-center">
                          {item.quantity || 1}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(index, (item.quantity || 1) + 1)
                          }
                          className="px-3 py-1 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price & Remove */}
                  <div className="flex justify-between sm:flex-col sm:justify-center sm:items-end mt-4 sm:mt-0">
                    <p className="font-semibold text-gray-900 dark:text-white text-lg">
                      ₹{" "}
                      {(
                        (parseFloat(item.price) || 0) *
                        (item.quantity || 1)
                      ).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 hover:text-red-600 font-medium mt-2 sm:mt-3"
                    >
                      ✕ Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 h-fit sticky top-28">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h2>

              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-300">
                  Subtotal ({totalPosters} items)
                </span>
                <span className="font-semibold">
                  ₹ {totalAmount.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between mb-2">
                <span className="text-gray-600 dark:text-gray-300">
                  Delivery Charges
                </span>
                <span className="font-semibold">
                  {deliveryCharge > 0 ? `₹ ${deliveryCharge}` : "Free"}
                </span>
              </div>

              <div className="flex justify-between border-t border-gray-300 dark:border-gray-700 pt-2 mt-2">
                <span className="text-lg font-bold">Total</span>
                <span className="text-lg font-bold">
                  ₹ {grandTotal.toFixed(2)}
                </span>
              </div>

              <Link to="/checkout">
                <button className="mt-6 w-full bg-black text-white dark:bg-white dark:text-black py-3 rounded-full font-semibold hover:scale-105 transform transition">
                  Proceed to Checkout
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CartPage;
