import React from "react";

const RefundPolicy = () => {
    return (
        <div className="refund-policy min-h-screen mx-5 md:mx-30 lg:mx-45 px-4 py-10 text-left text-page">
            <br />
            <br />
            <br />
            <h1 className="text-3xl font-bold mb-6">Refund & Cancellation Policy</h1>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">1. No Returns</h2>
                <p>
                    At PosterCon, all products are made to order. Once a poster is sold and delivered, it
                    cannot be returned or exchanged under any circumstances. We do not accept returns due to
                    personal preferences, size issues, or change of mind.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">2. Cancellations</h2>
                <p>
                    You may cancel your order <strong>before it has been shipped</strong>. Once the order is
                    marked as shipped or dispatched, it can no longer be canceled or refunded.
                </p>
                <p className="mt-2">
                    To cancel an order before shipping, please contact us immediately at{" "}
                    <a href="mailto:postercon99@gmail.com" className="text-blue-600 underline">
                        postercon99@gmail.com
                    </a>{" "}
                    with your order ID and full name.
                </p>
            </section>

            <section className="mb-6">
                <h2 className="text-xl font-semibold mb-2">3. Damaged or Incorrect Orders</h2>
                <p>
                    If you receive a damaged or incorrect poster, please contact us within{" "}
                    <strong>7 days of delivery</strong> with photos of the damage or error. We will verify and
                    process a replacement if applicable.
                </p>
            </section>

            <section>
                <h2 className="text-xl font-semibold mb-2">4. Contact Us</h2>
                <p>
                    For cancellation requests or damaged item issues, please contact us at:
                </p>
                <ul className="list-disc list-inside mt-2">
                    <li>Email: <a href="mailto:postercon99@gmail.com" className="text-blue-600 underline">postercon99@gmail.com</a></li>
                    <li>Website: <a href="https://postercon.vercel.app" className="text-blue-600 underline">postercon.vercel.app</a></li>
                </ul>
            </section>
        </div>
    );
};

export default RefundPolicy;
