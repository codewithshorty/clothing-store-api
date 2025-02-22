import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <a href="#" className="text-xl font-bold text-gray-800">
              My Portfolio Store
            </a>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Home
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                Products
              </a>
              <a href="#" className="text-gray-800 hover:text-gray-600">
                About
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
