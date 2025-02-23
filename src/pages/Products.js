import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ products }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product) => (
            <>
              <div className="bg-white rounded-lg shadow-md overflow-hidden ">
                <img
                  src={product.image}
                  alt="Project 2"
                  className="w-full h-48 pt-6 object-contain"
                />
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-800 mb-2">
                    {product.title}
                  </h4>
                  <div className="mb-4">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-light px-3 py-1 rounded-full">
                      {product.category}
                    </span>
                  </div>

                  <p className="text-lg font-bold  ">{product.price}$</p>
                  <button
                    href="#"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    View Details
                  </button>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
