import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const OrderSummary = ({ cart, createOrder, setCart }) => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");

  // Calculate total price
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  const navigate = useNavigate();

  const submitDataValue = (e) => {
    e.preventDefault();

    if (
      fName === "" ||
      lName === "" ||
      email === "" ||
      address === "" ||
      city === ""
    )
      return;

    const orderDetails = {
      fName,
      lName,
      email,
      address,
      city,
    };
    setCart([]);
    createOrder(orderDetails);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-8 pb-20">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">
        Order Summary
      </h2>

      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8">
        {/* Left Side: Form */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-xl font-bold mb-4 sm:mb-6">
            Shipping Information
          </h3>
          <form className="space-y-4" onSubmit={submitDataValue}>
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
                value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Last Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your last name"
                value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your city"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Address
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>

            {/* Checkout Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Checkout
            </button>
          </form>
        </div>

        {/* Right Side: Table */}
        <div className="w-full lg:w-1/2 bg-white rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-xl font-bold mb-4 sm:mb-6">Order Details</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                    Image
                  </th>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                    Title
                  </th>
                  <th className="px-3 py-2 text-left text-sm font-medium text-gray-700">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item) => (
                  <tr key={item.id} className="border-b border-gray-200">
                    <td className="px-3 py-2 text-sm text-gray-900">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-10 h-10 rounded-full"
                      />
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-900">
                      {item.title}
                    </td>
                    <td className="px-3 py-2 text-sm text-gray-900">
                      {item.price.toFixed(2)}$
                    </td>
                  </tr>
                ))}
                {/* Total Price Row */}
                <tr className="bg-gray-100">
                  <td
                    className="px-3 py-2 text-sm font-bold text-gray-900"
                    colSpan={2}
                  >
                    Total
                  </td>
                  <td className="px-3 py-2 text-sm font-bold text-gray-900">
                    <h3>{totalPrice.toFixed(2)}$</h3>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
