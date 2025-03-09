import { useEffect, useState } from "react";

const FAQContact: React.FC = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqs = [
    { question: "What services do you offer?", answer: "We provide high-quality aquarium products and accessories." },
    { question: "How can I track my order?", answer: "You will receive an email with tracking details once your order ships." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship worldwide with reliable courier services." },
    { question: "Can I return a product?", answer: "Yes, we accept returns within 30 days if the product is unused and in original packaging." },
    { question: "How do I contact customer support?", answer: "You can contact us via email, phone, or by filling out the contact form below." },
  ];

    useEffect(() => {
    window.scrollTo(0, 0);
  })

  return (
    <div className="container mx-auto px-6 py-12 max-w-4xl">
      {/* FAQ Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg shadow-sm">
              <button
                className="w-full text-left p-4 flex justify-between items-center bg-gray-100 hover:bg-gray-200 transition"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold text-gray-800">{faq.question}</span>
                <span className="text-gray-500">{openFAQ === index ? "▲" : "▼"}</span>
              </button>
              {openFAQ === index && <div className="p-4 text-gray-700">{faq.answer}</div>}
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us Section */}
      <section>
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Contact Us</h2>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-semibold">Your Name</label>
              <input type="text" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your name" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Your Email</label>
              <input type="email" className="w-full p-3 border border-gray-300 rounded-lg" placeholder="Enter your email" />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold">Message</label>
              <textarea className="w-full p-3 border border-gray-300 rounded-lg" rows={4} placeholder="Write your message"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="mt-6 text-center text-gray-700">
            <p>📧 <strong>Email:</strong> support@lifestyleaqua.com</p>
            <p>📞 <strong>Phone:</strong> +1 234 567 8900</p>
            <p>🏢 <strong>Address:</strong> 123 Aqua Street, Ocean City, Country</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQContact;
