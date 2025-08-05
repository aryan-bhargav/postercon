import { useParams, useLocation } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const PosterDetails = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const poster = state?.poster;
    const navigate = useNavigate();
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState("Matte A3 Poster - 12'' x 18''");
    const [showNotification, setShowNotification] = useState(false);

    const sizes = [
        "Matte A3 Poster - 12'' x 18''",
        "Digital Download",
        "Jumbo Poster - 18'' x 24''",
        "Laminated Framed - 8'' x 12''",
    ];

    const getPriceForSize = (sizeLabel) => {
        const sizePrices = {
            "Matte A3 Poster - 12'' x 18''": 199,
            "Digital Download": 99,
            "Jumbo Poster - 18'' x 24''": 349,
            "Laminated Framed - 8'' x 12''": 499,
        };
        return sizePrices[sizeLabel] || poster.price;
    };

    const handleBuyItNow = () => {
        const price = getPriceForSize(selectedSize);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(
            (item) => item.name === poster.name && item.size === selectedSize
        );

        if (existingItem) {
            // If already added, just navigate to checkout
            navigate("/checkout");
        } else {
            // Else, add to cart and then navigate
            cart.push({
                name: poster.name,
                path: poster.path,
                price,
                size: selectedSize,
                quantity,
            });

            localStorage.setItem("cart", JSON.stringify(cart));

            window.dispatchEvent(new Event("cartUpdated"));
            setShowNotification(true);
            setTimeout(() => setShowNotification(false), 3000);

            navigate("/checkout");
        }
    };


    const handleAddToCart = () => {
        const price = getPriceForSize(selectedSize);

        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(
            (item) => item.name === poster.name && item.size === selectedSize
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                name: poster.name,
                path: poster.path,
                price,
                size: selectedSize,
                quantity,
            });
        }

        localStorage.setItem("cart", JSON.stringify(cart));

        setShowNotification(true);
        setTimeout(() => {
            setShowNotification(false);
        }, 3000);

        window.dispatchEvent(new Event("cartUpdated"));
    };

    if (!poster) {
        return (
            <div className="text-center mt-20 text-red-600">
                Poster not found or data not passed. Go back and try again.
            </div>
        );
    }

    return (
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen pt-28 pb-16 px-4 md:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Image */}
                <div>
                    <img
                        src={poster.path}
                        alt={poster.name}
                        className="w-full max-h-[600px] object-contain rounded-xl shadow"
                    />
                    <p className="text-sm mt-2 text-gray-500 dark:text-gray-400">
                        Final product won't carry watermark. Slight artist signature may appear.
                    </p>
                </div>

                {/* Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{poster.name}</h1>
                    <p className="text-xl font-semibold text-red-600">
                        ₹{getPriceForSize(selectedSize)}
                        {poster.originalPrice && (
                            <span className="line-through text-gray-400 ml-2">₹{poster.originalPrice}</span>
                        )}
                    </p>

                    {/* Size Selector */}
                    <label className="block mt-6 text-lg font-medium">Size & Type:</label>
                    <select
                        value={selectedSize}
                        onChange={(e) => setSelectedSize(e.target.value)}
                        className="mt-2 p-3 w-full border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
                    >
                        {sizes.map((size) => (
                            <option key={size} value={size}>
                                {size} - ₹{getPriceForSize(size)}
                            </option>
                        ))}
                    </select>

                    {/* Quantity */}
                    <div className="flex items-center mt-6 space-x-4">
                        <button
                            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                            className="px-3 py-1 text-lg bg-gray-200 dark:bg-gray-700 rounded"
                        >
                            -
                        </button>
                        <span className="text-lg">{quantity}</span>
                        <button
                            onClick={() => setQuantity((q) => q + 1)}
                            className="px-3 py-1 text-lg bg-gray-200 dark:bg-gray-700 rounded"
                        >
                            +
                        </button>
                    </div>

                    {/* Add to Cart / Buy Now */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                        >
                            Add to cart
                        </button>
                        <Link to={"/cart"} className="w-full">
                            <button onClick={handleBuyItNow} className="w-full bg-red-600 text-white py-3 rounded hover:bg-red-700 transition">
                                Buy it now
                            </button>
                        </Link>
                    </div>

                    {/* Order Timeline */}
                    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                        <p>
                            🚚 Order within <strong>2 Hours 28 Minutes</strong> for same-day dispatch
                        </p>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            <p>📦 Ordered: Aug 05</p>
                            <p>✅ Ready: Aug 07 - Aug 09</p>
                            <p>📬 Delivered: Aug 09 - Aug 13</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Description */}
            <div className="mt-16">
                <h2 className="text-2xl font-bold mb-4">Description:</h2>
                <ul className="list-disc ml-6 space-y-2 text-gray-700 dark:text-gray-300">
                    <li>300 GSM matte paper, high-quality print.</li>
                    <li>Framed options not available</li>
                    <li>Sizes are approximate and may vary slightly.</li>
                    <li>Free shipping for order greater than 5 posters.</li>
                    <ul>
                        <li>If order is 1-5 then in a normal packaging</li>
                        <li>If order is greater than 5 then in a cardboard tube packaging</li>
                    </ul>
                </ul>
            </div>

            {/* Best Practices */}
            <div className="mt-10 text-gray-700 dark:text-gray-300">
                <h3 className="text-lg font-semibold mb-2">Additional Best Practices:</h3>
                <ul className="list-disc ml-6 space-y-1">
                    <li>Review sizing and description before ordering.</li>
                    <li>Ensure accurate shipping address to avoid issues.</li>
                    <li>
                        See our <a href="/refund-policy" className="text-red-500 underline">refund policy</a>.
                    </li>
                </ul>
            </div>

            {/* Notification */}
            {showNotification && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md shadow-lg z-[1000] animate-fadeInOut">
                    ✅ {poster.name} ({selectedSize}) x {quantity} added to cart!
                </div>
            )}
        </div>
    );
};

export default PosterDetails;
