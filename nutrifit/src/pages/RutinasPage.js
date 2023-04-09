import { Route, Routes } from "react-router-dom";
import { Rutinas } from "./Rutinas";
import { Piernas } from "./Piernas";
import { Hombros } from "./Hombros";
import { Brazos } from "./Brazos";
import { Pecho } from "./Pecho";
import { Espalda } from "./Espalda";

function RutinasPage() {
  return (
    <section>
      <Routes>
        <Route path="/" element={<Rutinas />} />
        <Route path="/piernas" element={<Piernas />} />
        <Route path="hombros" element={<Hombros />} />
        <Route path="/brazos" element={<Brazos />} />
        <Route path="/pecho" element={<Pecho />} />
        <Route path="/espalda" element={<Espalda />} />
      </Routes>
    </section>
  );
}

export default RutinasPage;
