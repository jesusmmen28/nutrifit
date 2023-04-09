import "./App.css";
import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import { Footer } from "./components/Footer";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Recetas } from "./pages/Recetas";
import { Consejos } from "./pages/Consejos";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Planes } from "./pages/Planes";
import RutinasPage from "./pages/RutinasPage";

function App() {
  return (
    <BrowserRouter>
        <Header />
        <div className="App">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/rutinas/*" element={<RutinasPage />} />
            <Route path="/recetas" element={<Recetas />} />
            <Route path="/consejos" element={<Consejos />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/planes" element={<Planes />} />
          </Routes>
        </div>
        <Footer />
        <ToastContainer position="bottom-center" pauseOnHover theme="light" />
    </BrowserRouter>
  );
}
export default App;
