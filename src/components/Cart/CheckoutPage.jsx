import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Retrieve cart details
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    // Prepare order details
    const orderDetails = {
      customer: formData,
      cart: cart,
    };

    // Save order to localStorage
    localStorage.setItem("order", JSON.stringify(orderDetails));
    localStorage.removeItem("cart"); // Clear cart after placing order

    // Format order details for email
    const formattedOrder = cart
      .map((item, index) => `${index + 1}. ${item.name} - Rs. ${item.price}`)
      .join("\n");

    // EmailJS parameters
    const emailParams = {
      to_email: formData.email, // Important!
      customer_name: formData.name,
      customer_email: formData.email,
      customer_address: formData.address,
      order_details: cart
        .map((item) => `• ${item.name} - Rs. ${item.price}`)
        .join("\n"),
      total_price: cart.reduce((sum, item) => sum + item.price, 0),
    };
    

    console.log("Email Parameters:", emailParams); // Debugging log

    // Send email using EmailJS
    try {
      const response = await emailjs.send(
        "service_is904y6", // Replace with your EmailJS Service ID
        "template_uendurd", // Replace with your EmailJS Template ID
        emailParams,
        "MI8kXmU2LUBO1pA1e" // Replace with your EmailJS Public Key
      );
      console.log("Email sent successfully!", response);
      navigate("/order-success");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Failed to send order confirmation. Please try again.");
    }
  };

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="address"
          placeholder="Delivery Address"
          value={formData.address}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black text-white py-2 rounded-md font-semibold hover:opacity-90"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
