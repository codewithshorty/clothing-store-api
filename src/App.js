import { useContext, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import ProductsContext from "./contexts/ProductContext";

function App() {
  const { products, setProducts } = useContext(ProductsContext);
  const [cart, setCart] = useState([]);

  const addToCart = (productForCart) => {
    setCart((oldCart) => [...oldCart, productForCart]);
  };

  useContext(ProductsContext);

  return (
    <div className="bg-gray-100">
      <Navbar cart={cart} />
      <Banner />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<Products products={products} />} />
        <Route
          path="product/:id"
          element={<Product products={products} onAddToCart={addToCart} />}
        />

        <Route path="cart" element={<Cart cart={cart} />} />
        <Route path="checkout" element={<Checkout />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
