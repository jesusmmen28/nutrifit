//import "./espalda.css";
import anto1 from "../images/anto1.jpg";

export const Espalda = () => {
    return (
        <section>
        <figure>
          <img className="imgRutinas" src={anto1} alt="fotoanto" />
        </figure>
        <h3 className="h3Rutinas">Espalda</h3>
        <ul className="ulRutinas">
          <li className="liRutinas">
          <b>Remo con mancuernas y banda elástica:</b> Coloca una banda elástica
            alrededor de tus manos y siéntate en un banco con una mancuerna en
            cada mano. Inclínate hacia adelante y mantén las mancuernas colgando
            hacia el suelo. Tira de las mancuernas hacia tus costillas,
            manteniendo la banda tensa, y luego baja lentamente las mancuernas
            hacia abajo. Haz 3 series de 10-12 repeticiones.
          </li>
          <li className="liRutinas">
          <b>Pull-ups con agarre cerrado:</b> Agárrate a una barra de pull-up con las
            manos cerca una de la otra y los brazos extendidos. Luego, levántate
            lentamente hasta que tu barbilla esté por encima de la barra. Baja
            lentamente tu cuerpo hacia abajo y repite. Haz 3 series de 10-12
            repeticiones.
          </li>
          <li className="liRutinas">
          <b>Deadlift con mancuernas:</b> Coloca una mancuerna en cada mano y ponte
            de pie con los pies separados a la altura de los hombros. Baja las
            mancuernas hacia el suelo, manteniendo la espalda recta, y luego
            levanta lentamente las mancuernas hacia arriba. Haz 3 series de
            10-12 repeticiones.
          </li>
          <li className="liRutinas">
          <b>Extensiones de espalda en el suelo:</b> Acuéstate boca abajo en el suelo
            con los brazos extendidos hacia adelante. Levanta los brazos y las
            piernas hacia arriba, manteniendo la espalda recta, y luego baja
            lentamente hacia abajo. Haz 3 series de 10-12 repeticiones.
          </li>
          <li className="liRutinas">
          <b>Cable pull-down con agarre inverso:</b> Siéntate en un banco frente a
            una máquina de cable y agarra la barra con las manos hacia arriba.
            Tira de la barra hacia abajo hacia tus hombros y luego levántala
            lentamente hacia arriba. Haz 3 series de 10-12 repeticiones.
          </li>
        </ul>
      </section>
    );
  };
  