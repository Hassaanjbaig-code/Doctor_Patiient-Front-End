import React, { useState } from "react";
import "./App.css";
import { Navbar } from "./Components/index.js";
import { Medicines, Overview, Doctor, Report, Appointments } from "./Pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="w-full grid lg:grid-cols-18 grid-cols-17">
      <BrowserRouter>
        <Navbar />
        <main className="bg-[#f0f0] w-full">
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
  );
}

export default App;
