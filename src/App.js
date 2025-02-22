import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Products from "./pages/Products";

function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Banner />
      <Home />
      <Products />
      <Product />
      <Footer />
    </div>
  );
}

export default App;
