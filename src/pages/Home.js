import React from "react";

const Home = () => {
  return (
    <div>
      <div className="relative py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1523381294911-8d3cead13475?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt="Clothing Store"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-50"></div>
        </div>
        <div className="relative container mx-auto px-6 text-center">
          <div className="bg-white opacity-90 rounded-lg shadow-lg p-8 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Your style is your way
            </h2>
            <p className="text-gray-600 mb-6">
              Shorty's Line Store is your go-to destination for trendy and
              affordable clothing. We offer a wide range of stylish outfits that
              cater to all ages and preferences. Our mission is to provide
              high-quality fashion that makes you feel confident and unique.
              Explore our collection and find the perfect look for any occasion.
            </p>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
            >
              Discover Our Products
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
