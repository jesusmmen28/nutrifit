import "./piernas.css";
import piernas from "../images/piernas.png";

export const Piernas = () => {
    return (
        <section>
        <figure>
          <img className="imgRutinas" src={piernas} alt="piernas" />
        </figure>
        <h3 className="h3piernas">Piernas</h3>
        <ul className="ulpiernas">
          <li className="liPiernas1 ">
            <b>Sentadillas:</b> Las sentadillas son un clásico ejercicio de
            pierna que trabaja los músculos de los glúteos, muslos y
            pantorrillas. Para realizarlas, colócate de pie con los pies
            separados al ancho de los hombros y baja lentamente hasta que tus
            muslos estén paralelos al suelo. Luego, regresa a la posición
            inicial. Puedes hacer 3 series de 12-15 repeticiones.
          </li>
          <li className="liPiernas">
            <b>Zancadas:</b> Las zancadas también son un excelente ejercicio
            para trabajar los músculos de las piernas. Para hacerlas, da un paso
            adelante con una pierna y baja la rodilla trasera hasta que casi
            toque el suelo. Luego, regresa a la posición inicial y repite con la
            otra pierna. Puedes hacer 3 series de 12-15 repeticiones por pierna.
          </li>
          <li className=" liPiernas1">
            <b>Prensa de piernas:</b> Si tienes acceso a una máquina de prensa
            de piernas en el gimnasio, este es un gran ejercicio para trabajar
            los cuádriceps. Siéntate en la máquina y empuja hacia arriba con las
            piernas, manteniendo la espalda recta. Puedes hacer 3 series de
            12-15 repeticiones.
          </li>
          <li className="liPiernas">
            <b>Extensiones de piernas:</b> Las extensiones de piernas son otro
            ejercicio excelente para trabajar los cuádriceps. Siéntate en una
            máquina de extensiones de piernas y levanta las piernas hasta que
            estén paralelas al suelo. Luego, baja lentamente las piernas de
            nuevo. Puedes hacer 3 series de 12-15 repeticiones.
          </li>
          <li className=" liPiernas1">
            <b>Elevaciones de talones:</b> Para trabajar los músculos de las
            pantorrillas, las elevaciones de talones son un gran ejercicio.
            Párate con los pies separados al ancho de los hombros y levanta los
            talones mientras mantienes los dedos de los pies en el suelo. Luego,
            baja lentamente los talones de nuevo. Puedes hacer 3 series de 12-15
            repeticiones.
          </li>
        </ul>
      </section>
    );
  };
  