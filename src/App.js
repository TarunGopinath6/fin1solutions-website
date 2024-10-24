import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Home";
import Insurance from "./Home";
import Loans from "./Home";
import About from "./Home";
import Contact from "./Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/insurance" element={<Insurance />} />
        <Route path="/loans" element={<Loans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
