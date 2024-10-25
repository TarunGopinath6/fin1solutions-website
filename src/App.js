import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./Home";
import MotorInsurance from "./MotorInsurance";
import HealthInsurance from "./HealthInsurance";
import GeneralInsurance from "./GeneralInsurance";
import VehicleLoans from "./VehicleLoans";
import Contact from "./Contact";
import About from "./Home";

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/motor insurance" element={<MotorInsurance />} />
        <Route path="/health insurance" element={<HealthInsurance />} />
        <Route path="/general insurance" element={<GeneralInsurance />} />
        <Route path="/vehicle loans" element={<VehicleLoans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
