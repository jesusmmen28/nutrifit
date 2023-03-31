import React from 'react';
import "./home.css";
import comidaypesa from "../images/comidaypesas.png";

function Home() {
  return (
    <section className="contenedorHome" >
       <figure className="">
          <img className="comidaypesa" src={comidaypesa} alt="comidaypesa" />
        </figure>
      <h2 className="tituloPrincipalHome">No es solo dieta y ejercicios: Es un estilo de vida sano</h2>
      <p>Consumir una dieta saludable y hacer ejercicio con regularidad pueden ayudar a controlar o retrasar los problemas de salud relacionados con el envejecimiento, tales como presión arterial alta y diabetes. Establezca objetivos a corto plazo para lograr y mantener una dieta saludable y una rutina de ejercicios.
  </p>
    </section>
  );
}

export default Home;