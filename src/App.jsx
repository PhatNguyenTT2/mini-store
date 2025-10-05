import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, ViewProduct } from "./pages";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/view" element={<ViewProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
