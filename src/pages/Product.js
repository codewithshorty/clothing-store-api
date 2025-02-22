import React from "react";

const Product = () => {
  return (
    <div className="flex flex-row">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex mx-auto w-80% ">
        <div className="w-1/3">
          <img
            src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
            alt="Clothing"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-2/3 p-6 flex flex-col justify-evenly">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            Trendy Summer T-Shirt
          </h3>

          <p className="text-gray-600 mb-4">
            Stay cool and stylish this summer with our lightweight and
            breathable t-shirt. Perfect for casual outings or beach days.
          </p>

          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              Casual Wear
            </span>
          </div>

          <p className="text-lg font-bold text-gray-800 mb-4">$29.99</p>

          <button className="w-40 h-20 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
