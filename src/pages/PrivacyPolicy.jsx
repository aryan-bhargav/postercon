import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="privacy-policy min-h-screen mx-5 md:mx-30 lg:mx-45 px-4 py-10 text-left text-page">
      <br />
      <br />
      <br />
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p><strong>Effective Date:</strong> August 5, 2025</p>
      <p><strong>Website:</strong> <a href="https://postercon.vercel.app" className="text-blue-500 underline">postercon.vercel.app</a></p>
      <p><strong>Contact Email:</strong> <a href="mailto:postercon99@gmail.com" className="text-blue-500 underline">postercon99@gmail.com</a></p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">1. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul className="list-disc ml-6 mt-2">
        <li><strong>Personal Information:</strong> name, email, shipping and billing address, payment details (handled via secure third-party services)</li>
        <li><strong>Device & Usage Data:</strong> IP address, browser type, pages visited, time spent, referring URLs, cookies</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-2">2. How We Use Your Information</h2>
      <p>We use your information to:</p>
      <ul className="list-disc ml-6 mt-2">
        <li>Process and ship orders</li>
        <li>Send order confirmations and updates</li>
        <li>Respond to customer inquiries</li>
        <li>Improve our website and services</li>
        <li>Prevent fraud or abuse</li>
      </ul>
      <p>We <strong>do not sell</strong> your personal information to third parties.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">3. Cookies</h2>
      <p>We use cookies to maintain cart sessions, analyze traffic, and improve the user experience. You can disable cookies in your browser settings.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">4. Sharing Your Information</h2>
      <p>We only share your data with trusted third parties necessary to operate our website or fulfill orders (e.g., payment processors, shipping partners). We may also share data to comply with legal obligations.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">5. Data Retention</h2>
      <p>We keep your order information for our records unless you request its deletion. To do so, email us at <a href="mailto:postercon99@gmail.com" className="text-blue-500 underline">postercon99@gmail.com</a>.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">6. Your Rights</h2>
      <p>Depending on your location, you may have rights to access, correct, or delete your personal data. Contact us to exercise these rights.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">7. External Links</h2>
      <p>We are not responsible for the privacy practices of any third-party websites we link to.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-2">8. Updates</h2>
      <p>This policy may be updated occasionally. Updates will be posted here with the revised date.</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">🎨 Content Disclaimer</h2>
      <p className='flex flex-wrap'>
        All posters sold on this site are unofficial artworks or publicly available images.
        <strong> PosterCon does not claim ownership of any characters, logos, or trademarks </strong> featured on its products.
        All intellectual property belongs to their respective owners.
      </p>
      <p className="flex flex-wrap">
        If you are a rights holder and believe your content is being used improperly, please contact us at  postercon99@gmail.com.
        <p className='flex flex-wrap'>We will respond promptly and take appropriate action, including removal.</p>
      </p>
    </div>
  );
};

export default PrivacyPolicy;
