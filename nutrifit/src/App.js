import "./App.css";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Rutinas } from "./pages/Rutinas";
import { Recetas } from "./pages/Recetas";
import { Consejos } from "./pages/Consejos";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rutinas" element={<Rutinas />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/consejos" element={<Consejos />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
    </BrowserRouter>
  );
}
export default App;
