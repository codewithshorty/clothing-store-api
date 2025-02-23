import { useContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import ProductsContext from "./contexts/ProductContext";

function App() {
  const { products, setProducts } = useContext(ProductsContext);

  useContext(ProductsContext);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products products={products} />} />
        <Route path="product/:id" element={<Product products={products} />} />
        <Route path="cart" element={<Cart />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
