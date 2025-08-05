import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* Divider Line */}
      <div className="w-[85%] mx-auto border-t border-gray-300 dark:border-gray-700"></div>

      <footer className="bg-page text-page bottom-0 w-full py-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold">PosterCon</h2>
          <p className="text-gray-400 dark:text-gray-400 mt-2">
            Your go-to place for the best posters!
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            <Link
              to="/privacy"
              className="flex items-center space-x-2 text-lg font-bold text-page hover:text-red-500"
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="flex items-center space-x-2 text-lg font-bold text-page hover:text-red-500"
            >
              Terms of Service
            </Link>
            <Link
              to="/refund-policy"
              className="flex items-center space-x-2 text-lg font-bold text-page hover:text-red-500"
            >
              Refund Policy
            </Link>
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-4">
            &copy; 2025 PosterCon. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
