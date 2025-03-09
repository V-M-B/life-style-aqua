const PrivacyPolicy: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-12 max-w-3xl">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Privacy Policy</h1>
      <p className="text-center text-gray-600 mb-6">Effective Date: <strong>February 28, 2024</strong></p>

      <section className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Information We Collect</h2>
          <p>
            We may collect the following types of information: your name, contact details (including email address),
            demographic data such as postcode, preferences, and interests, and any other information relevant to 
            customer surveys or promotional offers.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">How We Use Your Information</h2>
          <p>
            The collected information helps us understand your needs and provide better services. Specifically, we use it for:
          </p>
          <ul className="list-disc ml-6 space-y-1">
            <li>Internal record keeping.</li>
            <li>Improving our products and services.</li>
            <li>Sending promotional emails about new products, offers, or information you may find interesting.</li>
            <li>Conducting market research via email, phone, or mail.</li>
            <li>Customizing the website according to your preferences.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Security Measures</h2>
          <p>
            We are committed to ensuring the security of your personal information. To prevent unauthorized access or 
            disclosure, we have implemented physical, electronic, and managerial procedures to safeguard the data 
            we collect online.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Use of Cookies</h2>
          <p>
            Cookies help us analyze web traffic and improve user experience. These small files allow web applications to 
            respond to your preferences. You can modify your browser settings to decline cookies, but this may limit 
            certain website functionalities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Third-Party Sharing</h2>
          <p>
            We do not sell, distribute, or lease your personal information to third parties unless required by law 
            or with your explicit permission. If you opt-in, we may send promotional information about third-party 
            products or services.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, feel free to contact us:
          </p>
          <p className="mt-2">
            📧 <strong>Email:</strong> contact@example.com <br />
            📞 <strong>Phone:</strong> +1 234 567 8900 <br />
            🏢 <strong>Address:</strong> 123 Business Street, City, Country
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
