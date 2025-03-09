import {
  MapPin,
  Mail,
  Phone,
  Home,
  User,
  FileText,
  Lock,
  MessageSquare,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div>
      <footer className=" inset-0 bg-blue-200 bg-opacity-30 backdrop-blur-md rounded-lg text-gray-200">
        <div className="container mx-auto px-4 py-8">
          {/* Google Map Embed */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Our Location
            </h2>
            <div className="flex flex-col md:flex-row  items-center">
              <div className="w-full md:w-1/2 h-48 md:h-64 relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.1234567890123!2d77.5775773!3d13.0274979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17c426dc294b%3A0x915fc3403f3d8905!2sLife%20Style%20Aqua%2C%20No%2062%2C%20opp%20road%20to%20SBI%20bank%2C%202nd%20Cross%20Rd%2C%20near%20to%20dream%20machine%2C%20Ashwath%20Nagar%2C%20Sanjayanagara%2C%20Bengaluru%2C%20Karnataka%20560094!5e0!3m2!1sen!2sin!4v1639391619376!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Google Map"
                  className="w-full h-full rounded "
                ></iframe>
              </div>
              <div className="md:ml-4 text-center md:text-left">
                <a
                  href="https://maps.app.goo.gl/Z1HNz5ZecVkkb8Xi6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-blue-600 text-white px-4 py-2 rounded"
                >
                  Get Directions
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
              {/* Get in Touch Section */}
              <div>
                <h3 className="text-blue-600 font-bold mb-6 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600"></div>
                  GET IN TOUCH
                </h3>

                <div className="flex items-start gap-3 mb-4">
                  <MapPin
                    className="text-blue-600 mt-1 flex-shrink-0"
                    size={18}
                  />
                  <p className="text-gray-700">
                    Life Style Aqua, No 62, opp road to SBI bank, 2nd Cross Rd,
                    near to dream machine, Ashwath Nagar, Sanjayanagara,
                    Bengaluru, Karnataka 560094
                  </p>
                </div>

                <div className="flex items-center gap-3 mb-4">
                  <Mail className="text-blue-600 flex-shrink-0" size={18} />
                  <a
                    href="mailto:support@lifestyleaqua.com"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    support@lifestyleaqua.com
                  </a>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="text-blue-600 flex-shrink-0" size={18} />
                  <a
                    href="tel:+919738276569"
                    className="text-gray-700 hover:text-blue-600 transition"
                  >
                    +91-9738276569
                  </a>
                </div>
              </div>

              {/* Quick Links Section */}
              <div>
                <h3 className="text-blue-600 font-bold mb-6 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600"></div>
                  QUICK LINKS
                </h3>

                <ul className="space-y-3">
                  <li>
                    <a
                      href="/"
                      className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      <Home size={16} className="text-blue-600" />
                      Home
                    </a>
                  </li>
                  <li>
                    <Link
                      to="/visitors-count"
                      className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      <User size={16} className="text-blue-600" />
                      Visitors Count
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Popular Links Section */}
              <div>
                <h3 className="text-blue-600 font-bold mb-6 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600"></div>
                  POPULAR LINKS
                </h3>

                <ul className="space-y-3">
                  <li>
                    <Link
                      to="/terms&conditions"
                      className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      <FileText size={16} className="text-blue-600" />
                      Terms & Conditions
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/PrivacyPolicy"
                      className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      <Lock size={16} className="text-blue-600" />
                      Privacy Policy
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      <MessageSquare size={16} className="text-blue-600" />
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                    to="/faqs"
                      className="text-gray-700 hover:text-blue-600 transition flex items-center gap-2"
                    >
                      <FileText size={16} className="text-blue-600" />
                      FAQs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Newsletter Section */}
              <div>
                <h3 className="text-blue-600 font-bold mb-6 text-lg flex items-center gap-2">
                  <div className="w-1 h-6 bg-blue-600"></div>
                  NEWSLETTER
                </h3>

                <div className="flex mb-6">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="px-4 py-2 rounded-l border text-blue-600 border-gray-600 focus:outline-none focus:ring-2 focus:ring-white w-full"
                  />
                  <button className="bg-blue-600 text-white px-4 py-2 rounded-r hover:bg-blue-700 transition">
                    Sign Up
                  </button>
                </div>

                <div>
                  <p className="text-gray-700 mb-3">FOLLOW US</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="p-2 border border-gray-500 text-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      <Twitter size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 border border-gray-500 text-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      <Facebook size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 border border-gray-500 text-blue-600 rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a
                      href="#"
                      className="p-2 border border-gray-500 text-blue-600  rounded hover:bg-blue-600 hover:text-white hover:border-blue-600 transition"
                    >
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-blue-300">
              <p className="text-center text-gray-600">
                © {new Date().getFullYear()} Life Style Aqua. All rights
                reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
