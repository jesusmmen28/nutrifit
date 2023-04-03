import React from "react";
import "./home.css";
import comidaypesa from "../images/comidaypesas.png";
import { Link } from "react-router-dom";
import anto1 from "../images/anto1.jpg";
import { BsFillHeartPulseFill } from "react-icons/bs";
import { CgGym } from "react-icons/cg";
import { BsClockHistory } from "react-icons/bs";
import { MdNoFood } from "react-icons/md";
import antesdespues from "../images/antes-despues.jpg";

function Home() {
  return (
    <div className="homeContainer">
      <section className="headerSection">
        <figure>
          <img className="imgHome" src={anto1} alt="fotoanto" />
        </figure>
        <section className="planEntrenamientoHome">
          <p className="pPlanEntrenamientoHome1">ENTRENA CON NOSOTROS</p>
          <p className="pPlanEntrenamientoHome">
            MEJORA TU CONDICIÓN FÍSICA CON NUESTROS
          </p>
          <p>
            <Link to={"/planes"} className="linkPlanEntrenamiento">
              {" "}
              PLANES DE ENTRENAMIENTO
            </Link>
          </p>
        </section>
      </section>
      <section className="contenidoHome">
        <figure>
          <img className="comidaypesa" src={comidaypesa} alt="comidaypesa" />
        </figure>
        <article className="articleContenidoHome">
          <h2 className="titleHomeArt">
            No es solo dieta y ejercicios: Es un estilo de vida sano
          </h2>
          <p>
            Consumir una dieta saludable y hacer ejercicio con regularidad
            pueden ayudar a controlar o retrasar los problemas de salud
            relacionados con el envejecimiento, tales como presión arterial alta
            y diabetes. Establezca objetivos a corto plazo para lograr y
            mantener una dieta saludable y una rutina de ejercicios.
          </p>
        </article>
      </section>
      <section className="cuidaTuSalud">
        <h2 className="titleCuidaTuSalud">Cuida tu salud</h2>
        <div className="divCuidaTuSalud">
          <span className="divIconsCuidaTuSalud">
            {" "}
            <BsClockHistory className="iconsCuidaTuSalud" />
          </span>
          <p className="pCuidaTuSalud">Invierte tiempo</p>
        </div>
        <div className="divCuidaTuSalud">
          <span className="divIconsCuidaTuSalud">
            {" "}
            <CgGym className="iconsCuidaTuSalud" />
          </span>
          <p className="pCuidaTuSalud">Rutinas eficaces</p>
        </div>
        <div className="divCuidaTuSalud">
          <span className="divIconsCuidaTuSalud">
            {" "}
            <MdNoFood className="iconsCuidaTuSalud" />
          </span>
          <p className="pCuidaTuSalud">Dieta saludable</p>
        </div>
        <div className="divCuidaTuSalud">
          <span className="divIconsCuidaTuSalud">
            {" "}
            <BsFillHeartPulseFill className="iconsCuidaTuSalud" />
          </span>
          <p className="pCuidaTuSalud">Gana años de vida</p>
        </div>
      </section>
      <section className="xqNutrifit">
        <h2 className="titleXqNutrifit">¿Por qué elegir a Nutrifit?</h2>
        <p> En <b>Nutrifit</b> ofrecemos tres elementos claves para llevar un estilo de vida saludable y mantener a tu cuerpo en forma. Ponemos a tu alcance entrenamientos personalizados, una dieta adaptada a cada necesidad y el apoyo de entrenadores expertos que te ayudarán a alcanzar resultados efectivos y a evitar enfermedades.</p>
      </section>
      <section className="resultadosHome">
        <h2 className="titleResultadosHome">Resultados reales</h2>
        <figure>
          <img className="antesdespues" src={antesdespues} alt="antesdespues" />
        </figure>
      </section>
    </div>
  );
}

export default Home;
