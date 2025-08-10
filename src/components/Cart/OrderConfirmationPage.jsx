import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import OrderPDFGenerator from "./OrderPDFGenerator";
import { v4 as uuidv4 } from "uuid";
import "../../App.css";

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);
  const [orderId, setOrderId] = useState("");

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order"));
    if (order) {
      setOrderDetails(order);
      const id = "ORD-" + uuidv4().split("-")[0].toUpperCase();
      setOrderId(id);
      localStorage.removeItem("order");
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 dark:from-neutral-900 dark:to-neutral-800 p-6"
    >
      <br />
      <br />
      <br />
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="bg-white/80 dark:bg-neutral-800/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-lg w-full text-center text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-neutral-700"
      >
        {/* Success icon */}
        <div className="w-16 h-16 bg-green-500 shadow-lg shadow-green-500/30 text-white rounded-full flex items-center justify-center mx-auto mb-5">
          <svg
            className="w-10 h-10"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        {/* Heading */}
        <h1 className="text-2xl md:text-3xl font-bold">Order Placed Successfully 🎉</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Thank you for your purchase! Your posters are on their way.
        </p>

        {/* Order details */}
        {orderDetails ? (
          <div className="bg-gray-50/70 dark:bg-neutral-700/70 p-5 rounded-xl mt-6 text-left shadow-inner space-y-2">
            <p className="text-sm">
              <strong className="font-semibold">Order ID:</strong> {orderId}
            </p>
            <p className="text-sm">
              <strong className="font-semibold">Name:</strong> {orderDetails.customer.name}
            </p>
            <p className="text-sm">
              <strong className="font-semibold">Address:</strong>{" "}
              {orderDetails.customer.fullAddress}
            </p>

            <div className="mt-4 border-t border-gray-300 dark:border-neutral-600 pt-3 space-y-2">
              <h2 className="text-sm font-semibold">Order Items:</h2>
              {orderDetails.cart.map((item, index) => (
                <div
                  key={index}
                  className="flex justify-between text-sm text-gray-700 dark:text-gray-300"
                >
                  <span>
                    {item.name}{" "}
                    <span className="text-gray-500 dark:text-gray-400">
                      (x{item.quantity || 1})
                    </span>
                  </span>
                  <span>₹{(item.price * (item.quantity || 1)).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between font-bold mt-2">
                <span>Total:</span>
                <span>
                  ₹
                  {orderDetails.cart
                    .reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
                    .toFixed(2)}
                </span>
              </div>
            </div>

            {/* PDF Generator Button */}
            <div className="mt-4">
              <OrderPDFGenerator orderDetails={orderDetails} orderId={orderId} />
            </div>
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 mt-4">No order found.</p>
        )}

        {/* Back to Home Button */}
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white rounded-lg px-6 py-2 font-semibold shadow transition-all duration-200"
        >
          Back to Home
        </Link>
      </motion.div>
    </motion.div>
  );
};

export default OrderConfirmationPage;
