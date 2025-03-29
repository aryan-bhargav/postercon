import { useState } from "react";

const faqs = [
  {
    question: "What materials are used for the posters?",
    answer: "Our posters are printed on high-quality, durable paper with vibrant colors and sharp details.",
  },
  {
    question: "Do you offer custom poster designs?",
    answer: "Yes! You can upload your own images or designs to create personalized posters.",
  },
  {
    question: "How long does shipping take?",
    answer: "Shipping usually takes 5-7 business days, depending on your location.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and UPI payments.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-10 px-5 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center uppercase mb-6">FAQs</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-semibold">{faq.question}</h3>
              <span className="text-xl">{openIndex === index ? "−" : "+"}</span>
            </div>
            {openIndex === index && <p className="mt-2 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
