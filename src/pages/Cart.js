import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Cart = ({ cart }) => {
  console.log(cart);
  const navigate = useNavigate();

  const totalArray = [];

  cart.forEach((element) => {
    totalArray.push(element.price);
  });

  const totalCost = totalArray.reduce((acc, cur) => {
    return acc + cur;
  }, 0);

  return (
    <div className="min-h-screen bg-gray-100 p-8 items-center">
      {cart.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold text-center mb-8">
            Your Purchased Items
          </h1>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Image
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-700">
                    Price
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {cart.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 transition-colors"
                  >
                    <td className="px-6 py-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-40 h-40 rounded-full"
                      />
                    </td>
                    <td className="px-6 py-4 text-lg text-gray-900">
                      {item.title}
                    </td>
                    <td className="px-6 py-4 text-lg text-gray-900">
                      ${item.price.toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div className="text-2xl font-bold text-gray-800">
              Total: <span className="text-blue-600">{totalCost} $</span>
            </div>

            <button
              className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 text-xl font-bold transition-colors"
              onClick={() => navigate("/checkout")}
            >
              Go to Checkout
            </button>
          </div>
        </>
      ) : (
        <div className="w-100 h-20 border-4 border-red-600 rounded-lg flex items-center justify-center bg-red-200">
          <h2 className="font-bold text-red-800 ">
            Your cart is empty <i class="fa-solid fa-triangle-exclamation"></i>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Cart;
