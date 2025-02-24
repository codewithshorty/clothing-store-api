import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav className="bg-blue-600">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link to="/" className="text-2xl font-bold text-white">
              <i className="fa-solid fa-shop"></i> MarketOnline
            </Link>

            <button
              className="text-white focus:outline-none sm:hidden"
              onClick={toggleMenu}
            >
              <i
                className={`fa-solid ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>

            <div className="hidden sm:flex space-x-2">
              <Link
                to="/"
                className="text-white font-bold bg-blue-600 p-1 rounded-md border-2 border-white hover:bg-white hover:text-blue-600"
              >
                <i className="fa-solid fa-house"></i>
                Home
              </Link>
              <Link
                to="products"
                className="text-white font-bold bg-blue-600 p-1 rounded-md border-2 border-white hover:bg-white hover:text-blue-600"
              >
                <i className="fa-solid fa-store"></i>
                Products
              </Link>
              <Link
                to="cart"
                className="text-white font-bold bg-blue-600 p-1 rounded-md border-2 border-white hover:bg-white hover:text-blue-600"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                Cart
                {cart.length > 0 && (
                  <span className="inline-flex items-center rounded-lg bg-red-300 px-1 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset">
                    {cart.length}
                  </span>
                )}
              </Link>
            </div>
          </div>

          <div
            className={`${
              isMenuOpen ? "block" : "hidden"
            } sm:hidden mt-4 transition-all duration-300`}
          >
            <Link
              to="/"
              className="block text-white font-bold bg-blue-600 p-2 rounded-md border-2 border-white hover:bg-white hover:text-blue-600 mb-2"
            >
              <i className="fa-solid fa-house"></i>
              Home
            </Link>
            <Link
              to="products"
              className="block text-white font-bold bg-blue-600 p-2 rounded-md border-2 border-white hover:bg-white hover:text-blue-600 mb-2"
            >
              <i className="fa-solid fa-store"></i>
              Products
            </Link>
            <Link
              to="cart"
              className="block text-white font-bold bg-blue-600 p-2 rounded-md border-2 border-white hover:bg-white hover:text-blue-600"
            >
              <i className="fa-solid fa-cart-shopping"></i>
              Cart
              {cart.length > 0 && (
                <span className="inline-flex items-center rounded-lg bg-red-300 px-1 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset">
                  {cart.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
