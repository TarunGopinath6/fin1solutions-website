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
        <Route path="/motorinsurance" element={<MotorInsurance />} />
        <Route path="/healthinsurance" element={<HealthInsurance />} />
        <Route path="/generalinsurance" element={<GeneralInsurance />} />
        <Route path="/vehicleloans" element={<VehicleLoans />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
