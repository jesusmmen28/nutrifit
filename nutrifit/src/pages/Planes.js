import "./planes.css";
import React, { useState } from "react";
import planes from "../images/planes.png";

export const Planes = () => {
  const [plan, setPlan] = useState("");
  const [tiempoEntrenando, setTiempoEntrenando] = useState("");
  const [objetivo, setObjetivo] = useState("");
  const [peso, setPeso] = useState("");
  const [estatura, setEstatura] = useState("");
  const [imagen, setImagen] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes enviar los datos del cuestionario a un servidor o hacer lo que necesites con ellos
  }

  return (
    <>
      <figure>
        <img className="imgPlanes" src={planes} alt="planes" />
      </figure>
      <h2 className="titlePlanes">Planes personalizados</h2>
      <form className="formPlanes" onSubmit={handleSubmit}>
        <div>
          <label>¿Qué plan te interesa?</label>
          <select
            value={plan}
            onChange={(event) => setPlan(event.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="entrenamiento-nutricion">
              Entrenamiento + nutrición
            </option>
            <option value="entrenamiento">Entrenamiento</option>
            <option value="nutricion-deportiva">Nutrición deportiva</option>
          </select>
        </div>
        <div>
          <label>¿Cuánto tiempo llevas entrenando?</label>
          <select
            value={tiempoEntrenando}
            onChange={(event) => setTiempoEntrenando(event.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="primera-vez">Es mi primera vez</option>
            <option value="1-3-meses">De 1 a 3 meses</option>
            <option value="menos-de-un-ano">Menos de un año</option>
            <option value="mas-de-un-ano">Más de un año</option>
          </select>
        </div>
        <div>
          <label>¿Cuál es tu objetivo?</label>
          <select
            value={objetivo}
            onChange={(event) => setObjetivo(event.target.value)}
          >
            <option value="">Selecciona una opción</option>
            <option value="definicion">Definición</option>
            <option value="perder-grasa">Pérdida de grasa</option>
            <option value="perder-peso">Pérdida de peso</option>
            <option value="ganar-masa">Ganar masa muscular</option>
          </select>
        </div>
        <label>
          Peso:
          <input
            type="number"
            value={peso}
            onChange={(event) => setPeso(event.target.value)}
          />
        </label>
        <label>
          Estatura:
          <input
            type="number"
            value={estatura}
            onChange={(event) => setEstatura(event.target.value)}
          />
        </label>
        <label>
          Adjuntar imagen:
          <input
            type="file"
            accept="image/*"
            onChange={(event) => setImagen(event.target.files[0])}
          />
        </label>
      </form>
      <div className="divButtonPlanes">
        <button className="buttonPlanes">Enviar</button>
      </div>
    </>
  );
};
