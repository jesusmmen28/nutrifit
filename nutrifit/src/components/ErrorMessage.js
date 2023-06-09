import { Link } from "react-router-dom";

export const ErrorMessage = ({ message }) => {
  return (
    <section className="error">
      <h1>Error</h1>
      <p>{message}</p>
      <Link className='errorInicio' to={"/"}>Volver a la página de inicio</Link>
    </section>
  );
};