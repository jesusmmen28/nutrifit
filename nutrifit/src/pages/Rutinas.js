import { Link } from "react-router-dom";
import "./rutinas.css";
import planpersonal from "../images/entremaientopersonalizado.png";
import planpersonalizado from "../images/planpersonalizado.png";

export const Rutinas = () => {
  return (
    <>
      <figure>
        <img className="imgRutinas" src={planpersonal} alt="planpersonal" />
      </figure>
      <section className="contenedorRutinas">
        <h2 className="titleRutinas">Rutinas diarias de ejercicios</h2>
        <p>
          Hacer rutinas diarias de ejercicio en el gimnasio es esencial para
          mantener una buena salud física y mental. Al ejercitar diferentes
          partes del cuerpo como hombros, pecho, brazos, espalda y piernas, se
          fortalecen los músculos, se mejora la postura y se aumenta la
          resistencia.{" "}
        </p>
        <p className="pRutinas">
          Además, el ejercicio libera endorfinas, lo que ayuda a reducir el
          estrés y mejorar el estado de ánimo. Al hacer del ejercicio una rutina
          diaria, se logra mantener un estilo de vida saludable a largo plazo.
        </p>
      </section>
      <div className="contenedorRutas">
        <p>
          A continuación ponemos a tu disposición una serie de rutinas para que
          trabajes un día a la semana.
        </p>
        <ul className="ulRutina">
          <li className="linkRutinaEntrenamiento">
            <Link to={"/rutinas/piernas"} className="">
              PIERNAS
            </Link>
          </li>
          <li className="linkRutinaEntrenamiento">
            <Link to={"/rutinas/brazos"} className="">
              BRAZOS
            </Link>
          </li>
          <li className="linkRutinaEntrenamiento">
            <Link to={"/rutinas/espalda"} className="">
              ESPALDA
            </Link>
          </li>
          <li className="linkRutinaEntrenamiento">
            <Link to={"/rutinas/pecho"} className="">
              PECHO
            </Link>
          </li>
          <li className="linkRutinaEntrenamiento">
            <Link to={"/rutinas/hombros"} className="H">
              HOMBROS
            </Link>
          </li>
        </ul>
      </div>
      <figure>
        <img
          className="imgRutinas fotoRut"
          src={planpersonalizado}
          alt="planpersonalizado"
        />
      </figure>
      <p className="pRutinasPlanes">
        Si te interesa un plan personalizado de entrenamiento adaptado a tu
        necesidad, haz clic
        <Link to={"/planes"} className="">
          {" "}
          aquí.
        </Link>
      </p>
    </>
  );
};
