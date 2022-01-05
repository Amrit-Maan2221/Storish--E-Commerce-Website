import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductDetails from "./components/Product/ProductDetails";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
