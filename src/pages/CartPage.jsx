import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const CartPage = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const totalAmount = cart.reduce(
    (sum, item) => parseFloat(sum) + parseFloat(item.price),
    0
  );

  return (<>
    <br />
    <br />
    <br />
    <div className="p-6 max-w-3xl t-45 h-screen mx-auto  text-gray-900 dark:text-gray-100">

      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center bg-gray-100 dark:bg-neutral-800 p-4 rounded-lg shadow"
              >
                <div className="flex items-center space-x-4">
                  <img
                    src={item.path}
                    alt={item.name}
                    className="w-16 h-20 object-cover rounded"
                  />
                  <div>
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Size: {item.size}
                    </p>
                    <p className="font-semibold">Rs. {item.price}</p>
                  </div>
                </div>
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:underline"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-bold">Total: Rs. {totalAmount}</h2>
            <Link to="/checkout">
              <button className="mt-3 w-full bg-black dark:bg-white dark:text-black text-white py-2 rounded-md font-semibold hover:opacity-90 transition-colors">
                Proceed to Checkout
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  </>
  );
};

export default CartPage;
