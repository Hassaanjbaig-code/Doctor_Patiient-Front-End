import React, { useState } from "react";
import "./App.css";
import { Navbar, Topnavbar } from "./Components/index.js";
import { Medicines, Overview, Doctor, Report, Appointments } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [HandleResponsive, setHandleResponsive] = useState(true);
  const HandleResponsiveClick = () => {
    setHandleResponsive(!HandleResponsive);
  };
  return (
    <>
      <div
        className={`w-full ${
          HandleResponsive == false && "max-md:flex"
        } md:grid lg:grid-cols-18 md:grid-cols-17`}
      >
        <BrowserRouter>
          <Navbar
            Responsive={HandleResponsive}
            CloseResponsive={HandleResponsiveClick}
          />
          <main className="bg-[#f0f0] w-full">
            <Topnavbar Responsive={HandleResponsiveClick} />
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/Appointments" element={<Appointments />} />
              <Route path="/Doctor" element={<Doctor />} />
              <Route path="/Medicines" element={<Medicines />} />
              <Route path="/Report" element={<Report />} />
            </Routes>
          </main>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
