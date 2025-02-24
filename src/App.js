import { useContext, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
import OrderSummary from "./pages/OrderSummary";
import ProductsContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

function App() {
  const [order, setOrder] = useState(null);
  const { products } = useContext(ProductsContext);
  const { cart, setCart } = useContext(CartContext);
  // const [cart, setCart] = useState([]);

  const navigate = useNavigate();
  const addToCart = (productForCart) => {
    setCart((oldCart) => [...oldCart, productForCart]);
    navigate("/products");
  };

  const displayOrder = (order) => {
    setOrder(order);
  };

  return (
    <div className="bg-gray-100">
      <Navbar cart={cart} />
      <Banner />
      <Routes>
        <Route path="/" element={<Home order={order} />} />
        <Route path="products" element={<Products products={products} />} />
        <Route
          path="product/:id"
          element={<Product products={products} onAddToCart={addToCart} />}
        />

        <Route path="cart" element={<Cart cart={cart} />} />
        <Route
          path="checkout"
          element={
            <OrderSummary
              cart={cart}
              createOrder={displayOrder}
              setCart={setCart}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
