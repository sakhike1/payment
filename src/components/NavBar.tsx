import React, { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebaseConfig";
import { signOut } from "firebase/auth";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [user] = useAuthState(auth); // Get the current user
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleProducts = () => setIsProductsOpen(!isProductsOpen);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login"); // Navigate to login page after logout
  };

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <nav className="bg-white border-b shadow-sm fixed top-0 left-0 right-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
            >
              PayFlows
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              Home
            </Link>

            <div className="relative">
              <button
                className="flex items-center text-gray-600 hover:text-purple-700 transition-colors duration-200"
                onClick={toggleProducts}
              >
                Products
                <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isProductsOpen ? 'rotate-180' : ''}`} />
              </button>
              {isProductsOpen && (
                <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg py-2 w-56 transition-all duration-200 ease-in-out z-10">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-600 to-purple-800"></div>
                  <Link
                    to="/ProcessPayment"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Payment Processing
                  </Link>
                  <Link
                    to="/InvoiceManagement"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Invoice Management
                  </Link>
                  <Link
                    to="/RecurringBilling"
                    className="block px-4 py-2 text-gray-600 hover:bg-purple-50 hover:text-purple-700 transition-colors duration-150"
                    onClick={() => setIsProductsOpen(false)}
                  >
                    Recurring Billing
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/PersonalPay"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              Personal
            </Link>
            <Link
              to="/About"
              className="text-gray-600 hover:text-purple-700 transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all"
            >
              Business
            </Link>
            <div className="flex items-center space-x-4">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="border focus:outline-none border-purple-600 text-gray-700 hover:text-gray-500 px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="border focus:outline-none border-purple-600 text-gray-700 hover:text-gray-500 px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-200"
                >
                  Login
                </button>
              )}
            </div>
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-purple-700 transition-colors border border-purple-600 focus:outline-none duration-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
            }`}
        >
          <div className="py-4 space-y-4 border-t">
            <Link
              to="/"
              className="block text-gray-600 hover:text-purple-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              Home
            </Link>

            <div>
              <button
                onClick={toggleProducts}
                className="flex items-center focus:outline-none w-full text-gray-600 hover:text-purple-700 transition-colors duration-200 rounded-full border border-purple-600"
              >
                Products
                <ChevronDown
                  className={`ml-1 h-4 w-4 transform transition-transform duration-200 ${isProductsOpen ? "rotate-180" : ""
                    }`}
                />
              </button>
              <div
                className={`transition-all duration-200 ease-in-out ${isProductsOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
              >
                <div className="ml-4 mt-2 space-y-2 border-l-2 border-purple-200 pl-4">
                  <Link
                    to="/ProcessPayment"
                    className="block text-gray-600 hover:text-purple-700 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Payment Processing
                  </Link>
                  <Link
                    to="/InvoiceManagement"
                    className="block text-gray-600 hover:text-purple-700 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Invoice Management
                  </Link>
                  <Link
                    to="/RecurringBilling"
                    className="block text-gray-600 hover:text-purple-700 transition-colors duration-200"
                    onClick={toggleMenu}
                  >
                    Recurring Billing
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/PersonalPay"
              className="block text-gray-600 hover:text-purple-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              PersonalPay
            </Link>
            <Link
              to="/About"
              className="block text-gray-600 hover:text-purple-700 transition-colors duration-200"
              onClick={toggleMenu}
            >
              About
            </Link>
            <div className="space-y-2">
              {user ? (
                <button
                  onClick={handleLogout}
                  className="flex items-center justify-center pr-4 h-12 mr-4 focus:outline-none w-full text-gray-800 transition-colors duration-200 rounded-full border border-purple-600"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={handleLogin}
                  className="flex items-center justify-center pr-4 h-12 mr-4 focus:outline-none w-full text-gray-800 transition-colors duration-200 rounded-full border border-purple-600"
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;