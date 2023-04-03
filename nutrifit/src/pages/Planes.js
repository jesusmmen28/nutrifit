import "./planes.css";
import React, { useState } from 'react';


export const Planes = () => {
  const [plan, setPlan] = useState('');
  const [tiempoEntrenando, setTiempoEntrenando] = useState('');
  const [objetivo, setObjetivo] = useState('');
  const [peso, setPeso] = useState('');
  const [estatura, setEstatura] = useState('');
  const [imagen, setImagen] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    // Aquí puedes enviar los datos del cuestionario a un servidor o hacer lo que necesites con ellos
  }

  return (
   <>
   <h2>Planes personalizados</h2>
    <form className="formPlanes" onSubmit={handleSubmit}>
      <label>
        ¿Qué plan te interesa?
        <select value={plan} onChange={(event) => setPlan(event.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="entrenamiento-nutricion">Entrenamiento + nutrición</option>
          <option value="entrenamiento">Entrenamiento</option>
          <option value="nutricion-deportiva">Nutrición deportiva</option>
        </select>
      </label>
      <label>
        ¿Cuánto tiempo llevas entrenando?
        <select value={tiempoEntrenando} onChange={(event) => setTiempoEntrenando(event.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="primera-vez">Es mi primera vez</option>
          <option value="1-3-meses">De 1 a 3 meses</option>
          <option value="menos-de-un-ano">Menos de un año</option>
          <option value="mas-de-un-ano">Más de un año</option>
        </select>
      </label>
      <label>
        ¿Cuál es tu objetivo?
        <select value={objetivo} onChange={(event) => setObjetivo(event.target.value)}>
          <option value="">Selecciona una opción</option>
          <option value="definicion">Definición</option>
          <option value="perder-grasa">Pérdida de grasa</option>
          <option value="perder-peso">Pérdida de peso</option>
          <option value="ganar-masa">Ganar masa muscular</option>
        </select>
      </label>
      <label>
        Peso:
        <input type="number" value={peso} onChange={(event) => setPeso(event.target.value)} />
      </label>
      <label>
        Estatura:
        <input type="number" value={estatura} onChange={(event) => setEstatura(event.target.value)} />
      </label>
      <label>
        Adjuntar imagen:
        <input type="file" accept="image/*" onChange={(event) => setImagen(event.target.files[0])} />
      </label>
      <button type="submit">Enviar</button>
    </form>
    </>
  );
};

