import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";

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

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderId = "ORD-" + uuidv4().split("-")[0].toUpperCase();

    const orderDetails = {
      customer: formData,
      cart,
      orderId,
    };

    localStorage.setItem("order", JSON.stringify(orderDetails));
    localStorage.removeItem("cart");

    const emailParams = {
      to_email: formData.email,
      customer_name: formData.name,
      customer_email: formData.email,
      customer_address: formData.address,
      order_details: cart
        .map((item, i) => `${i + 1}. ${item.name} - Rs. ${item.price}`)
        .join("\n"),
      total_price: cart.reduce((sum, item) => sum + item.price, 0),
      order_id: orderId,
    };

    try {
      const response = await emailjs.send(
        "service_ggtfy2a",     // Replace with your EmailJS service ID
        "template_zvpox6h",    // Replace with your EmailJS template ID
        emailParams,
        "rKaI1-AKQsxXHO6bP"     // Replace with your EmailJS public key
      );
      console.log("✅ Email sent successfully!", response);
      navigate("/order-success");
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      alert("Failed to send order confirmation email. Please try again.");
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
