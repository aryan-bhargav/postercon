import { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { v4 as uuidv4 } from "uuid";
import "../../App.css";

const CheckoutPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",       // added mobile here
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
    const mobileRegex = /^[6-9]\d{9}$/; // Indian mobile number validation
    const pincodeRegex = /^\d{6}$/;

    if (!nameRegex.test(formData.name)) {
      alert("Please enter a valid name (only letters, min 2 characters).");
      return false;
    }

    if (!emailRegex.test(formData.email)) {
      alert("Please enter a valid email address.");
      return false;
    }

    if (!mobileRegex.test(formData.mobile)) {
      alert("Please enter a valid 10-digit Indian mobile number.");
      return false;
    }

    if (formData.street.trim().length < 3) {
      alert("Please enter a valid street address.");
      return false;
    }

    if (!formData.city || !formData.state) {
      alert("Please select both city and state.");
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
      customer_mobile: formData.mobile,  // Add mobile here
      customer_address: fullAddress,
      order_details: cart
        .map(
          (item, i) =>
            `${i + 1}. ${item.name} (x${item.quantity || 1}) - Rs. ${(
              item.price * (item.quantity || 1)
            ).toFixed(2)}`
        )
        .join("\n"),
      total_price: cart.reduce(
        (sum, item) => sum + item.price * (item.quantity || 1),
        0
      ),
      order_id: orderId,
    };


    try {
      const response = await emailjs.send(
        "service_w6a4fhf",
        "template_cx71dy9",
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

  return (
    <div className="pt-28 pb-16 px-4 md:px-0 max-w-md mx-auto text-gray-900 dark:text-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Checkout</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
        />
        {/* Mobile input added */}
        <input
          type="tel"
          name="mobile"
          placeholder="Mobile Number"
          value={formData.mobile}
          onChange={handleChange}
          required
          maxLength={10}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
        />
        <input
          type="text"
          name="street"
          placeholder="Street Address"
          value={formData.street}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
        />

        <div className="grid grid-cols-2 gap-4">
          <select
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
            required
          >
            <option value="">Select City</option>
            <option value="Delhi">Delhi</option>
            <option value="Noida">Noida</option>
            <option value="Gurgaon">Gurgaon</option>
            <option value="Ghaziabad">Ghaziabad</option>
            <option value="Faridabad">Faridabad</option>
          </select>

          <select
            name="state"
            value={formData.state}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
            required
          >
            <option value="">Select State</option>
            <option value="Delhi">Delhi</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Haryana">Haryana</option>
          </select>
        </div>

        <input
          type="text"
          name="pincode"
          placeholder="Pincode"
          value={formData.pincode}
          onChange={handleChange}
          required
          maxLength={6}
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
        />

        <button
          type="submit"
          className="w-full bg-black dark:bg-white dark:text-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          Place Order
        </button>
      </form>
    </div>
  );
};

export default CheckoutPage;
