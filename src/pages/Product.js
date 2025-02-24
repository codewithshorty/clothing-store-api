import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products, onAddToCart }) => {
  const params = useParams();

  const productSingle = products.find(
    (product) => product.id === Number(params.id)
  );

  // If the product is not found, show a loading or error message
  if (!productSingle) {
    return (
      <div className="text-center text-xl font-bold mt-10">
        Product not found or loading...
      </div>
    );
  }

  return (
    <div className="flex flex-col sm:flex-row p-4 sm:p-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row mx-auto w-full max-w-4xl pb-15">
        {/* Image Section */}
        <div className="w-full sm:w-1/3">
          <img
            src={productSingle.image}
            alt={productSingle.title}
            className="w-full h-64 sm:h-full object-cover p-4 sm:p-8"
          />
        </div>

        {/* Details Section */}
        <div className="w-full sm:w-2/3 p-4 sm:p-6 flex flex-col justify-center">
          <h2 className="text-gray-800 mb-2 text-xl sm:text-2xl font-bold">
            {productSingle.title}
          </h2>

          <p className="text-gray-600 mb-4 text-sm sm:text-base">
            {productSingle.description}
          </p>

          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-xs sm:text-sm font-semibold px-3 py-1 rounded-full">
              {productSingle.category}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-800 mb-4">
            {productSingle.price} $
          </h3>

          <button
            className="w-full sm:w-60 h-12 sm:h-16 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 text-lg sm:text-2xl font-bold"
            onClick={() => onAddToCart(productSingle)}
          >
            Add to Cart <i className="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
