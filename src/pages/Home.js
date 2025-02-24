import React from "react";
import { Link } from "react-router-dom";

const Home = ({ order }) => {
  return (
    <div>
      {/* Success Message */}
      {order !== null && (
        <div className="w-full p-2 sm:p-4 border-4 border-green-600 rounded-lg flex flex-col sm:flex-row items-center justify-center bg-green-200 text-center sm:text-left">
          <h4 className="text-sm sm:text-base">
            Purchase successful!&nbsp;&nbsp;&nbsp;
          </h4>
          <h5 className="text-xs sm:text-sm font-bold text-green-800">
            First Name: {order.fName}&nbsp;| Last Name: {order.lName}&nbsp;|
            Email: {order.email}&nbsp;| City: {order.city}&nbsp;| Address:{" "}
            {order.address}
            &nbsp;| <i className="fa-solid fa-check"></i>
          </h5>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative pt-5">
        <div className="absolute inset-0 h-96 sm:h-170">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Clothing Store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        </div>
        <div className="relative container mx-auto my-20 sm:my-40 px-4 sm:px-6 text-center">
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg p-6 sm:p-8 max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">
              Your style is your way
            </h2>
            <p className="text-sm sm:text-base text-gray-600 mb-6">
              Shorty's Line Store is your go-to destination for trendy and
              affordable clothing. We offer a wide range of stylish outfits that
              cater to all ages and preferences. Our mission is to provide
              high-quality fashion that makes you feel confident and unique.
              Explore our collection and find the perfect look for any occasion.
            </p>
            <Link
              to={"products"}
              className="inline-block bg-blue-600 text-white font-bold text-sm sm:text-base px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-blue-700"
            >
              Discover Our Products{" "}
              <i className="fa-regular fa-hand-pointer"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
