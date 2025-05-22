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
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 dark:bg-neutral-900 p-6"
    >
      <div className="bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 max-w-lg w-full text-center text-gray-900 dark:text-gray-100">
        <div className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4">
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
        <h1 className="text-2xl font-bold">Order Placed Successfully! 🎉</h1>
        <p className="text-gray-600 dark:text-gray-300 mt-2">Your order has been confirmed.</p>

        {orderDetails ? (
          <div className="bg-gray-50 dark:bg-neutral-700 p-4 rounded-lg mt-4 text-left">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Order ID:</strong> {orderId}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Name:</strong> {orderDetails.customer.name}
            </p>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              <strong>Address:</strong> {orderDetails.customer.address}
            </p>
            <OrderPDFGenerator orderDetails={orderDetails} orderId={orderId} />
          </div>
        ) : (
          <p className="text-gray-500 dark:text-gray-400 mt-4">No order found.</p>
        )}

        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 hover:bg-blue-700 text-white rounded px-6 py-2 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </motion.div>
  );
};

export default OrderConfirmationPage;
