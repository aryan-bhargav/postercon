import React from "react";

const Terms = () => {
  return (
    <div className="terms min-h-screen mx-45 px-4 py-10 text-left text-page">
      <br />
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
      <p className="mb-2 text-sm text-gray-600">Effective Date: August 5, 2025</p>
      <p className="mb-6 text-sm text-gray-600">Website: <a href="https://postercon.vercel.app" className="text-blue-600 underline">postercon.vercel.app</a></p>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Acceptance of Terms</h2>
        <p>By accessing or using PosterCon, you agree to be bound by these Terms of Service and our Privacy Policy. If you do not agree with any part, please do not use our website.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Use of Website</h2>
        <ul className="list-disc list-inside">
          <li>You must be at least 13 years old to use PosterCon.</li>
          <li>You agree not to misuse the services provided on this site.</li>
          <li>All content on the site is for personal, non-commercial use unless explicitly stated.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Intellectual Property</h2>
        <p>All posters, designs, images, graphics, and content displayed on PosterCon are the property of PosterCon or its licensors and are protected by copyright and trademark laws.</p>
        <p className="mt-2">You may not:</p>
        <ul className="list-disc list-inside">
          <li>Reproduce, copy, or redistribute posters for resale.</li>
          <li>Use our images for commercial purposes without permission.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Orders & Payments</h2>
        <ul className="list-disc list-inside">
          <li>All orders are subject to availability and acceptance.</li>
          <li>We reserve the right to cancel any order at our discretion.</li>
          <li>Prices and details may change without notice.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Shipping & Delivery</h2>
        <ul className="list-disc list-inside">
          <li>We aim to dispatch posters within the stated timeframe.</li>
          <li>We are not liable for delivery delays caused by carriers.</li>
          <li>Ensure your address is correct before placing an order.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Refunds & Returns</h2>
        <p>Due to the nature of our products (print-on-demand), we do not accept returns unless the item is damaged or incorrect.</p>
        <p className="mt-2">If you receive a defective item, contact us at <a href="mailto:postercon99@gmail.com" className="text-blue-600 underline">postercon99@gmail.com</a> within 7 days of delivery with a photo of the issue.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. User Conduct</h2>
        <p>You agree not to:</p>
        <ul className="list-disc list-inside">
          <li>Post or submit harmful, illegal, or offensive content.</li>
          <li>Attempt to access data not intended for you.</li>
          <li>Interfere with the website’s functionality or security.</li>
        </ul>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Disclaimer of Warranty</h2>
        <p>PosterCon provides content and services “as is” without warranties of any kind. We do not guarantee that the site will always be available, secure, or error-free.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Limitation of Liability</h2>
        <p>PosterCon is not liable for any indirect, incidental, or consequential damages arising out of your use of the site or purchase of any products.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Changes to Terms</h2>
        <p>We may update these Terms from time to time. Continued use of PosterCon after changes means you accept the updated terms.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">11. Governing Law</h2>
        <p>These Terms are governed by the laws of India. Any disputes shall be resolved under the jurisdiction of the courts of Delhi, India.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-2">12. Contact Us</h2>
        <p>If you have any questions about these Terms, feel free to reach out:</p>
        <ul className="list-disc list-inside mt-2">
          <li>Email: <a href="mailto:postercon99@gmail.com" className="text-blue-600 underline">postercon99@gmail.com</a></li>
          <li>Website: <a href="https://postercon.vercel.app" className="text-blue-600 underline">postercon.vercel.app</a></li>
        </ul>
      </section>
    </div>
  );
};

export default Terms;
