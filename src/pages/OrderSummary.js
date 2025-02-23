import React from "react";

const OrderSummaryPage = () => {
  // Sample data for ordered items
  const orderedItems = [
    { id: 1, title: "Trendy Summer T-Shirt", price: 29.99 },
    { id: 2, title: "Classic Denim Jeans", price: 49.99 },
    { id: 3, title: "Sporty Running Shoes", price: 79.99 },
  ];

  // Calculate total price
  const totalPrice = orderedItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Order Summary</h1>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Left Side: Form */}
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Shipping Information</h2>
          <form className="space-y-4">
            {/* First Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                First Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your first name"
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
        <div className="w-full md:w-1/2 bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">Order Details</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  ID
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Title
                </th>
                <th className="px-4 py-2 text-left text-sm font-medium text-gray-700">
                  Price
                </th>
              </tr>
            </thead>
            <tbody>
              {orderedItems.map((item) => (
                <tr key={item.id} className="border-b border-gray-200">
                  <td className="px-4 py-3 text-sm text-gray-900">{item.id}</td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    {item.title}
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-900">
                    ${item.price.toFixed(2)}
                  </td>
                </tr>
              ))}
              {/* Total Price Row */}
              <tr className="bg-gray-100">
                <td
                  className="px-4 py-3 text-sm font-bold text-gray-900"
                  colSpan={2}
                >
                  Total
                </td>
                <td className="px-4 py-3 text-sm font-bold text-gray-900">
                  ${totalPrice.toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default OrderSummaryPage;
