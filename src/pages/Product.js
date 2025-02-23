import React from "react";
import { useParams } from "react-router-dom";

const Product = ({ products }) => {
  const params = useParams();

  const productSingle = products.filter((product) => {
    if (product.id === Number(params.id)) return product;
  });

  return (
    <div className="flex flex-row">
      <div className="bg-white rounded-lg shadow-md overflow-hidden flex mx-auto w-80% ">
        <div className="w-1/3">
          <img
            src={productSingle[0].image}
            alt={productSingle[0].title}
            className="w-full h-full object-cover p-20"
          />
        </div>

        <div className="w-2/3 p-6 flex flex-col justify-center">
          <h3 className="text-xl font-bold text-gray-800 mb-2">
            {productSingle[0].title}
          </h3>

          <p className="text-gray-600 mb-4">{productSingle[0].description}</p>

          <div className="mb-4">
            <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
              {productSingle[0].category}
            </span>
          </div>

          <p className="text-lg font-bold text-gray-800 mb-4">
            {productSingle[0].price}
          </p>

          <button className="w-40 h-20 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Product;
