import "./consejos.css";
import alimentoSano from "../images/alimentoSano.png";
import calentamiento from "../images/calentamiento.png";
import postura from "../images/postura.png";
import hidratacion from "../images/hidratacion.png";

export const Consejos = () => {
  return (
    <>
      <figure>
        <img className="imgRutinas" src={alimentoSano} alt="planpersonal" />
      </figure>
      <section className="contenedorConsejos">
        <h2 className="titleConsejos">Consejos fitness</h2>
        <articles>
          <h3 className="titleConsejos2">Antes de entrenar</h3>
          <figure>
            <img
              className="imgConsejos"
              src={calentamiento}
              alt="planpersonal"
            />
          </figure>
          <p>
            <b>Hidrátate adecuadamente: </b>Es importante beber suficiente agua
            antes del entrenamiento para evitar la deshidratación y mejorar el
            rendimiento físico. Se recomienda beber al menos 500 ml de agua 30
            minutos antes de entrenar.
          </p>
          <p className="pConsejos">
            <b>Calentar:</b> Realizar un calentamiento antes del entrenamiento
            ayuda a preparar los músculos y las articulaciones para la actividad
            física, disminuyendo el riesgo de lesiones. Puedes realizar
            estiramientos suaves, movilidad articular o una caminata ligera.
          </p>
          <p>
            <b>Comer alimentos ricos en carbohidratos:</b> Los carbohidratos son
            una fuente de energía importante para el cuerpo durante el
            entrenamiento. Es recomendable comer alimentos ricos en
            carbohidratos antes del entrenamiento, como frutas, arroz, pasta,
            pan integral, entre otros.
          </p>
          <p className="pConsejos">
            <b>Evitar alimentos pesados:</b> Antes del entrenamiento, evita
            comer alimentos pesados o ricos en grasas, ya que pueden provocar
            indigestión o incomodidad durante el entrenamiento.
          </p>
          <p>
            <b>Usar ropa cómoda:</b> Es importante usar ropa cómoda y
            transpirable para el entrenamiento. La ropa ajustada puede
            dificultar la circulación sanguínea y provocar incomodidad, mientras
            que la ropa suelta puede engancharse en las máquinas del gimnasio.
          </p>
          <p className="pConsejos">
            <b>Establecer metas realistas:</b> Es importante establecer metas
            realistas antes del entrenamiento para no frustrarte. Las metas
            deben ser alcanzables y graduales, para que puedas ver el progreso y
            mantenerte motivado.
          </p>
          <p>
            <b>Descansar lo suficiente:</b> El descanso es importante para la
            recuperación del cuerpo después del entrenamiento. Es recomendable
            dormir al menos 7-8 horas al día y evitar entrenar en días
            consecutivos para dar tiempo al cuerpo para recuperarse.
          </p>
        </articles>
        <articles>
          <h3 className="titleConsejos2">Durante el entrenamiento</h3>
          <figure>
            <img
              className="imgConsejos"
              src={postura}
              alt="planpersonal"
            />
          </figure>
          <p>
            <b>Mantén una postura adecuada:</b> Es importante mantener una
            postura adecuada durante el entrenamiento para evitar lesiones y
            mejorar la efectividad del ejercicio. Mantén la espalda recta, los
            hombros relajados y la cabeza en línea recta con la columna
            vertebral.
          </p>
          <p className="pConsejos">
            <b>Respira adecuadamente:</b> La respiración adecuada es importante
            durante el entrenamiento para mejorar el rendimiento y prevenir la
            fatiga. Inhala profundamente por la nariz y exhala lentamente por la
            boca durante el ejercicio.
          </p>
          <p>
            <b>Controla el ritmo y la intensidad:</b> Es importante controlar el
            ritmo y la intensidad del ejercicio para evitar fatiga y lesiones.
            Comienza con una intensidad baja y aumenta gradualmente a medida que
            te sientas más cómodo.
          </p>
          <p className="pConsejos">
            <b>Mantén la concentración:</b> La concentración es importante
            durante el entrenamiento para mantener la técnica adecuada y evitar
            lesiones. Mantén la mente enfocada en el ejercicio y evita
            distraerte con otras cosas.
          </p>
          <p>
            <b>Varía los ejercicios:</b> Varía los ejercicios para evitar la
            monotonía y mejorar el rendimiento. Cambia los ejercicios cada
            cierto tiempo para estimular diferentes músculos y evitar el
            estancamiento.
          </p>
          <p className="pConsejos">
            <b>Descansa cuando sea necesario:</b> Si te sientes fatigado o
            incómodo durante el ejercicio, detente y descansa. Es importante
            escuchar a tu cuerpo y no excederte en el entrenamiento.
          </p>
          <p>
            <b>Utiliza el equipamiento adecuado:</b> Es importante utilizar el
            equipamiento adecuado durante el entrenamiento para evitar lesiones
            y mejorar el rendimiento. Asegúrate de que el equipamiento esté en
            buenas condiciones y ajustado a tu cuerpo.
          </p>
        </articles>
        <articles>
          <h3 className="titleConsejos2">
            Después de entrenar
          </h3>
          <figure>
            <img
              className="imgConsejos"
              src={hidratacion}
              alt="hidratacion"
            />
          </figure>
          <p>
            <b>Estiramiento:</b> Realiza ejercicios de estiramiento después del
            entrenamiento para ayudar a relajar los músculos y evitar la
            rigidez. Los estiramientos deben ser suaves y graduales, manteniendo
            cada estiramiento durante al menos 30 segundos.
          </p>
          <p className="pConsejos">
            <b>Hidratación:</b> Bebe agua después del entrenamiento para reponer
            los líquidos perdidos durante el ejercicio. Se recomienda beber al
            menos 500 ml de agua después del entrenamiento.
          </p>
          <p>
            <b>Consumir proteínas y carbohidratos:</b> Es importante consumir
            alimentos ricos en proteínas y carbohidratos después del
            entrenamiento para ayudar a reparar y reconstruir los músculos.
          </p>
          <p className="pConsejos">
            <b>Descanso:</b> Es importante descansar después del entrenamiento
            para permitir que el cuerpo se recupere y se repare. Duerme al menos
            7-8 horas al día y evita entrenar en días consecutivos.
          </p>
          <p>
            <b>Masaje:</b> Realiza un masaje después del entrenamiento para
            ayudar a reducir la rigidez muscular y mejorar la circulación
            sanguínea. Puedes utilizar un rodillo de espuma o pedir un masaje
            profesional.
          </p>
          <p className="pConsejos">
            <b>Controla la ingesta de alcohol:</b> Evita consumir alcohol
            después del entrenamiento, ya que puede afectar la recuperación
            muscular y aumentar la deshidratación.
          </p>
          <p>
            <b>Analiza tu progreso:</b> Analiza tu progreso después del
            entrenamiento para ver si estás alcanzando tus metas y si necesitas
            realizar ajustes en tu entrenamiento o nutrición.
          </p>
        </articles>
      </section>
    </>
  );
};
