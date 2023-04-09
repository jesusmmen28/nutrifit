import "./about.css";
import antofoto from "../images/antofoto.jpg";

export const About = () => {
  return (
    <section className="contenedorAbout">
      <article>
        <h2 className="titleAbout">Quienes Somos</h2>
        <p>
          Somos un equipo especializado en entrenamiento y nutrición con la
          misión de mostrarte que más que rutinas buscamos una vida saludable y
          sostenible en el tiempo. Contamos con la experiencia y
          transformaciones que hablan por sí solas. Queremos ayudarte y estamos
          listos para comenzar la tuya. Estás listo?
        </p>
      </article>
      <article className="articleAbout">
        <h3 className="titleArticleAbout">Karina Izzo</h3>
        <figure>
          <img className="imgAbout" src={antofoto} alt="fotoanto" />
        </figure>
        <p className ="pAbout">Directora de Nutrifit</p>
      </article>
    </section>
  );
};
