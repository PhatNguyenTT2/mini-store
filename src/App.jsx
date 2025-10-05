import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ViewProduct, Checkout, DetailProduct, ShoppingCart } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/view" element={<ViewProduct />} />
        <Route path="/products/:id/:slug" element={<DetailProduct />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/shopping-cart" element={<ShoppingCart />} />
      </Routes>
    </Router>
  );
}

export default App;
