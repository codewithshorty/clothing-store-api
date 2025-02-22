import { useContext, useEffect, useState } from "react";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";
import ProductsContext from "./contexts/ProductContext";

function App() {
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProducts(json));
  // }, []);

  const { products, setProducts } = useContext(ProductsContext);

  useContext(ProductsContext);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <Banner />
      <Home />
      <Products products={products} />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
