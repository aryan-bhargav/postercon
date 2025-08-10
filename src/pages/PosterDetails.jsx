import { useParams, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

const PosterDetails = () => {
    const { state } = useLocation();
    const { id } = useParams();
    const poster = state?.poster;
    const navigate = useNavigate();

    const sizes = [{ label: "A3", price: 99 }];
    const [quantity, setQuantity] = useState(1);
    const [selectedSize, setSelectedSize] = useState(sizes[0]);
    const [showNotification, setShowNotification] = useState(false);
    const [openSection, setOpenSection] = useState(null);

    const toggleSection = (section) => {
        setOpenSection((prev) => (prev === section ? null : section));
    };

    const now = new Date();
    const formatDate = (date) =>
        date.toLocaleDateString("en-US", { month: "short", day: "2-digit" });

    const cutoffHour = 15;
    const cutoff = new Date();
    cutoff.setHours(cutoffHour, 0, 0, 0);
    const timeDiffMs = cutoff.getTime() - now.getTime();

    let countdownText = "Order cutoff passed for today";
    if (timeDiffMs > 0) {
        const hours = Math.floor(timeDiffMs / (1000 * 60 * 60));
        const minutes = Math.floor((timeDiffMs % (1000 * 60 * 60)) / (1000 * 60));
        countdownText = `Order within ${hours} Hour${hours !== 1 ? "s" : ""} ${minutes} Minute${minutes !== 1 ? "s" : ""} for same-day dispatch`;
    }

    const orderedDate = formatDate(now);
    const readyStart = new Date(now);
    readyStart.setDate(now.getDate() + 2);
    const readyEnd = new Date(now);
    readyEnd.setDate(now.getDate() + 4);
    const deliveryStart = new Date(now);
    deliveryStart.setDate(now.getDate() + 4);
    const deliveryEnd = new Date(now);
    deliveryEnd.setDate(now.getDate() + 8);

    const handleAddToCart = () => {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];

        const existingItem = cart.find(
            (item) => item.name === poster.name && item.size === selectedSize.label
        );

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            cart.push({
                name: poster.name,
                path: poster.path,
                price: selectedSize.price,
                size: selectedSize.label,
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
                    <div className="relative w-full max-w-[400px] mx-auto">
                        <div className="bg-gray-50 p-2 shadow-2xl border border-gray-300 dark:border-gray-700">
                            <div className="bg-white dark:bg-gray-900 border border-gray-400 dark:border-gray-600 shadow-xl overflow-hidden transition-transform duration-300 ease-in-out">

                                {/* Poster Image */}
                                <div
                                    className="relative w-full overflow-hidden"
                                    style={{ aspectRatio: "210 / 297" }}
                                >
                                    <img
                                        src={poster.path}
                                        alt={poster.name}
                                        className="w-full h-full object-cover rounded-md"
                                        loading="lazy"
                                    />
                                </div>
                            </div>
                        </div>
                        <p className="text-sm mt-2 text-center text-gray-500 dark:text-gray-400">
                            Final product won't carry watermark. Slight artist signature may appear.
                        </p>
                    </div>
                </div>

                {/* Info */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{poster.name}</h1>
                    <p className="text-xl font-semibold text-red-600">
                        ₹{selectedSize.price}
                    </p>

                    {/* Size Selector */}
                    <label className="block mt-6 text-lg font-medium">Size & Type:</label>
                    <select
                        value={selectedSize.label}
                        onChange={(e) =>
                            setSelectedSize(sizes.find((s) => s.label === e.target.value))
                        }
                        className="mt-2 p-3 w-full border rounded-lg bg-white dark:bg-gray-800 dark:text-white"
                    >
                        {sizes.map((size) => (
                            <option key={size.label} value={size.label}>
                                {size.label}
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

                    {/* Add to Cart */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={handleAddToCart}
                            className="w-full bg-black text-white py-3 rounded hover:bg-gray-800 transition"
                        >
                            Add to cart
                        </button>
                    </div>

                    {/* Order Timeline */}
                    <div className="mt-6 p-4 bg-gray-100 dark:bg-gray-800 rounded">
                        <p>🚚 {countdownText}</p>
                        <div className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                            <p>📦 Ordered: {orderedDate}</p>
                            <p>✅ Ready: {formatDate(readyStart)} - {formatDate(readyEnd)}</p>
                            <p>📬 Delivered: {formatDate(deliveryStart)} - {formatDate(deliveryEnd)}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Accordion Section */}
            <div className="mt-16 space-y-4">
                {/* Description */}
                <div className="border border-gray-300 dark:border-gray-700 rounded">
                    <button
                        onClick={() => toggleSection("description")}
                        className="w-full text-left px-4 py-3 font-semibold text-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        📄 Description
                    </button>
                    {openSection === "description" && (
                        <div className="px-6 py-4 text-gray-700 dark:text-gray-300 space-y-2">
                            <ul className="list-disc ml-4 space-y-1">
                                <li>300 GSM matte paper, high-quality print.</li>
                                <li>Framed options not available.</li>
                                <li>Sizes are approximate and may vary slightly.</li>
                                <li>Free shipping for orders greater than 5 posters.</li>
                            </ul>
                        </div>
                    )}
                </div>

                {/* Best Practices */}
                <div className="border border-gray-300 dark:border-gray-700 rounded">
                    <button
                        onClick={() => toggleSection("bestPractices")}
                        className="w-full text-left px-4 py-3 font-semibold text-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition"
                    >
                        ✅ Additional Best Practices
                    </button>
                    {openSection === "bestPractices" && (
                        <div className="px-6 py-4 text-gray-700 dark:text-gray-300 space-y-1">
                            <ul className="list-disc ml-4">
                                <li>Review sizing and description before ordering.</li>
                                <li>Ensure accurate shipping address to avoid issues.</li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>

            {/* Notification */}
            {showNotification && (
                <div className="fixed top-5 left-1/2 transform -translate-x-1/2 bg-black dark:bg-white text-white dark:text-black px-4 py-2 rounded-md shadow-lg z-[1000] animate-fadeInOut">
                    ✅ {poster.name} ({selectedSize.label}) x {quantity} added to cart!
                </div>
            )}
        </div>
    );
};

export default PosterDetails;
