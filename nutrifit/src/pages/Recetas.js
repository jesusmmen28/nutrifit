import "./recetas.css";
import { MenuRecetas } from "../components/MenuRecetas";
import comidasaludable from "../images/comidasaludable.png";

export const Recetas = () => {
  return (
    <>
      <figure>
        <img className="imgRecetas" src={comidasaludable} alt="comidasaludable" />
      </figure>
      <section className="contenedorRecetas">
        <h2 className="tituloPrincipalReceta">Recetas saludables y nutritivas</h2>
        <p className="pRecetas">
          La alimentación sana y nutritiva es esencial para mantener una buena
          salud y prevenir enfermedades. Una dieta equilibrada que incluya
          frutas, verduras, proteínas magras, carbohidratos complejos y grasas
          saludables proporciona al cuerpo los nutrientes necesarios para
          funcionar correctamente. </p>
          <p className="pRecetas">Además, una dieta adecuada puede ayudar a
          mantener un peso saludable, reducir el riesgo de enfermedades crónicas
          como la diabetes y enfermedades cardíacas, mejorar la digestión y
          fortalecer el sistema inmunológico.</p> 
          <p>Por lo tanto, es importante elegir
          alimentos nutritivos y evitar aquellos que son altos en calorías,
          grasas saturadas y azúcares añadidos. Una dieta sana y equilibrada es
          una inversión en la salud a largo plazo.
        </p>
      </section>
      <div>
        <MenuRecetas />
      </div>
    </>
  );
};
