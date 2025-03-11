import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '@/assets/newlogo.png';

function Header() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-blue-200 bg-opacity-30 shadow sticky top-0 z-50 bg-opacity-50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div>
          <Link to="/">
            <img src={logo} alt="example" className="h-16 w-40" />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium">
          <li>
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="hover:text-red-500">
              Shop
            </Link>
          </li>

          <li>
            <Link to="/authenticator" className="hover:text-red-500">
              Authenticator
            </Link>
          </li>
          <li>
            <Link to="/faq-contact" className="hover:text-red-500">
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            className="text-gray-700"
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow">
          <ul className="flex flex-col space-y-2 px-4 py-4 font-medium">
            <li>
              <Link to="/" className="block hover:text-red-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/shop" className="block hover:text-red-500">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/authenticator" className="block hover:text-red-500">
                Authenticator
              </Link>
            </li>
            <li>
              <Link to="/about" className="block hover:text-red-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/faq-contact" className="block hover:text-red-500">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
