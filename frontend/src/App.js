import Footer from "./components/layout/Footer/Footer";
import Home from "./components/Home/Home";
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Home />
      <Footer />
    </Router>
  );
}

export default App;
