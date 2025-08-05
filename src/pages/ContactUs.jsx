import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, subject, message } = formData;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name.trim().length < 2) {
      alert("Please enter a valid name.");
      return false;
    }
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return false;
    }
    if (subject.trim().length < 3) {
      alert("Please enter a valid subject.");
      return false;
    }
    if (message.trim().length < 10) {
      alert("Message should be at least 10 characters.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    try {
      await emailjs.send(
        "service_ggtfy2a", // replace with your service ID
        "template_zvpox6h", // replace with your template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
        },
        "rKaI1-AKQsxXHO6bP" // replace with your public key
      );

      alert("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Something went wrong. Please try again later.");
    }

    setLoading(false);
  };

  return (
    <div className="pt-28 pb-20 px-4 max-w-2xl mx-auto text-gray-900 dark:text-gray-100">
      <h1 className="text-4xl font-bold mb-6 text-center">Contact Us</h1>
      <p className="text-center mb-8 text-gray-600 dark:text-gray-400">
        Got a question, feedback, or just want to say hi? Fill out the form below and we'll get back to you shortly.
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
          value={formData.subject}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          rows="5"
          placeholder="Your Message"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-black dark:bg-white dark:text-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
