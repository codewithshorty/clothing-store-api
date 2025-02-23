import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ cart }) => {
  return (
    <div>
      <nav className="bg-blue-600">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link href="#" className="text-2xl font-bold text-white">
              <i class="fa-solid fa-shop"></i> MarketOnline
            </Link>
            <div className="flex space-x-8">
              <Link
                to={"/"}
                className="text-white font-bold bg-blue-600 p-1 rounded-md border-2 border-white hover:bg-white hover:text-blue-600"
              >
                <i class="fa-solid fa-house"></i>
                Home
              </Link>
              <Link
                to={"products"}
                className="text-white font-bold  bg-blue-600 p-1 rounded-md border-2 border-white hover:bg-white hover:text-blue-600"
              >
                <i class="fa-solid fa-store"></i>
                Products
              </Link>
              <Link
                to={"cart"}
                className="text-white font-bold bg-blue-600 p-1 rounded-md border-2 border-white hover:bg-white hover:text-blue-600"
              >
                <i class="fa-solid fa-cart-shopping"></i>
                Cart
                {cart.length > 0 ? (
                  <span class="inline-flex items-center rounded-lg bg-red-300 px-1 py-1 text-xs font-medium text-red-700 ring-1 ring-red-600/20 ring-inset ">
                    {cart.length}
                  </span>
                ) : (
                  ""
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
