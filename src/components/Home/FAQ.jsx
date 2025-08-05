import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="py-14 px-4 sm:px-6 md:px-10 lg:px-16 max-w-4xl mx-auto">
      <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
        Frequently Asked Questions
      </h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm transition hover:shadow-md"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left"
            >
              <span className="font-medium text-gray-800 dark:text-gray-100">{faq.question}</span>
              <span className="text-xl text-gray-500 dark:text-gray-400">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
