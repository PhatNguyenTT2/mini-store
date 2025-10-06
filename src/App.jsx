import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ViewProduct, Checkout, DetailProduct, ShoppingCart, LoginSignup } from "./pages";
import ProtectedRoute from "./components/ProtectedRoute";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Auth Routes - Public */}
        <Route path="/" element={<LoginSignup />} />
        <Route path="/signup" element={<LoginSignup />} />

        {/* Dashboard Routes - Protected */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/view"
          element={
            <ProtectedRoute>
              <ViewProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/products/:id/:slug"
          element={
            <ProtectedRoute>
              <DetailProduct />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route
          path="/product/shopping-cart"
          element={
            <ProtectedRoute>
              <ShoppingCart />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
