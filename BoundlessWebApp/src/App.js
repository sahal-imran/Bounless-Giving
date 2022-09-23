import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Headers/Navbar";
import LogoBar from "./components/LogoBar/LogoBar";
import Home from "./Views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <LogoBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
