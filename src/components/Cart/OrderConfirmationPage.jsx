import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const OrderConfirmationPage = () => {
  const [orderDetails, setOrderDetails] = useState(null);

  useEffect(() => {
    const order = JSON.parse(localStorage.getItem("order"));
    if (order) {
      setOrderDetails(order);
      localStorage.removeItem("order"); // Clear order details after displaying
    }
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6"
    >
      <motion.div 
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
        className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full text-center"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 150, damping: 10 }}
          className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4"
        >
          <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </motion.div>

        <h1 className="text-2xl font-bold text-gray-800">Order Placed Successfully! 🎉</h1>
        <p className="text-gray-600 mt-2">Your order has been confirmed and will be delivered soon.</p>

        {orderDetails ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.3 }}
            className="bg-gray-50 p-4 rounded-lg mt-4 text-left"
          >
            <h2 className="text-lg font-semibold text-gray-700">Thank you, {orderDetails.customer.name}!</h2>
            <p className="text-gray-600 mt-1"><strong>Delivery Address:</strong> {orderDetails.customer.address}</p>
          </motion.div>
        ) : (
          <p className="text-gray-500 mt-4">No order found.</p>
        )}

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
          className="mt-6"
        >
          <Link to="/" className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition-all">
            Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default OrderConfirmationPage;
