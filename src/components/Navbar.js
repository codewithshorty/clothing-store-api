import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="text-xl font-bold text-gray-800">
              My Portfolio Store
            </Link>
            <div className="flex space-x-4">
              <Link to={"/"} className="text-gray-800 hover:text-gray-600">
                Home
              </Link>
              <Link
                to={"products"}
                className="text-gray-800 hover:text-gray-600"
              >
                Products
              </Link>
              <Link to={"cart"} className="text-gray-800 hover:text-gray-600">
                Cart
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
