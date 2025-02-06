import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar1 from "./components/NavBar/Navbar";
import DashboardLayoutBasic from "./components/DashboardComponent/Employee";
import Footer from "./components/Footer/Footer"; // Import Footer
import Home1 from "./pages/Home1";

function App() {
  return (
    <div className="app">
      <Navbar1 /> {/* Navbar remains outside so it's visible on all pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<DashboardLayoutBasic />} />
        <Route path="/home" element={<Home />} />
        <Route path="/home1" element={<Home1 />} />
      </Routes>
      <Footer /> {/* Footer should be outside Routes */}
    </div>
  );
}

export default App;
