import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";
import "../../App.css";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const nameRegex = /^[A-Za-z\s]{2,}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const cityStateRegex = /^[A-Za-z\s]+$/;
    const pincodeRegex = /^\d{6}$/;

    if (!nameRegex.test(formData.name)) {
      alert("Please enter a valid name (only letters, min 2 characters).");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (formData.street.trim().length < 3) {
      alert("Please enter a valid street address.");
      return false;
    }

    if (!cityStateRegex.test(formData.city)) {
      alert("Please enter a valid city name (only letters).");
      return false;
    }

    if (!cityStateRegex.test(formData.state)) {
      alert("Please enter a valid state name (only letters).");
      return false;
    }

    if (!pincodeRegex.test(formData.pincode)) {
      alert("Pincode must be exactly 6 digits.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const orderId = "ORD-" + uuidv4().split("-")[0].toUpperCase();
    const fullAddress = `${formData.street}, ${formData.city}, ${formData.state} - ${formData.pincode}`;

    const orderDetails = {
      customer: {
        ...formData,
        fullAddress,
      },
      cart,
      orderId,
    };

    localStorage.setItem("order", JSON.stringify(orderDetails));
    localStorage.removeItem("cart");

    const emailParams = {
      to_email: formData.email,
      customer_name: formData.name,
      customer_email: formData.email,
      customer_address: fullAddress,
      order_details: cart
        .map((item, i) => `${i + 1}. ${item.name} - Rs. ${item.price}`)
        .join("\n"),
      total_price: cart.reduce((sum, item) => sum + item.price, 0),
      order_id: orderId,
    };

    try {
      const response = await emailjs.send(
        "service_ggtfy2a",
        "template_zvpox6h",
        emailParams,
        "rKaI1-AKQsxXHO6bP"
      );
      console.log("✅ Email sent successfully!", response);
      navigate("/order-success");
    } catch (error) {
      console.error("❌ Failed to send email:", error);
      alert("Failed to send order confirmation email. Please try again.");
    }
  };

  return (<>
    <br />
    <br />
    <br />
    <div className="p-6 t-45 max-w-md mx-auto  text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="input-class"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="input-class"
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleChange}
          required
          className="input-class"
        />
        <input
          type="text"
          name="city"
          placeholder="City"
          value={formData.city}
          onChange={handleChange}
          required
          className="input-class"
        />
        <input
          type="text"
          name="state"
          placeholder="State"
          value={formData.state}
          onChange={handleChange}
          required
          className="input-class"
        />
        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          className="input-class"
        />
        <button
          type="submit"
          className="w-full bg-black dark:bg-white dark:text-black text-white py-2 rounded-md font-semibold hover:opacity-90 transition-colors"
        >
          Place Order
        </button>
      </form>
    </div>
  </>
  );
};

export default CheckoutPage;
