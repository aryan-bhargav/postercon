import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="w-[90%] max-w-6xl mx-auto border-t border-gray-300 dark:border-gray-700"></div>

      <footer className="w-full py-8 bg-transparent">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

          {/* Logo centered */}
          <div className="flex justify-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-page">
              <img
                src="/logo.png"
                alt="logo"
                width={200}
                height={200}
              />
            </Link>
          </div>

          <p className="text-gray-600 dark:text-gray-400 mt-2 text-sm sm:text-base">
            Your go-to place for the best posters!
          </p>

          {/* Links */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 mt-6">
            <Link
              to="/privacy"
              className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition"
            >
              Terms of Service
            </Link>
            <Link
              to="/refund-policy"
              className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200 hover:text-red-500 dark:hover:text-red-400 transition"
            >
              Refund Policy
            </Link>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 dark:text-gray-400 mt-6 text-sm sm:text-base">
            &copy; 2025 PosterCon. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
