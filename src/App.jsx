// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import NavBar from "./components/temp.jsx";
import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import About from "./pages/About.jsx";
import Story from "./pages/Story";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="app-container" tabIndex={0}>
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Story />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
