const Footer = () => {
    return (
      <footer className="bg-black bottom-0 w-full text-white py-6 mt-10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-xl font-bold">PosterCon</h2>
          <p className="text-gray-400 mt-2">Your go-to place for the best posters!</p>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="hover:text-red-500">Privacy Policy</a>
            <a href="#" className="hover:text-red-500">Terms of Service</a>
            <a href="#" className="hover:text-red-500">Refund Policy</a>
          </div>
          <p className="text-gray-500 mt-4">&copy; 2025 PosterCon. All Rights Reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  