import React, { useState } from "react";
import { dataContactService } from "../services";
import { toast } from "react-toastify";
import "./contact.css";

export const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [comentario, setComentario] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dataContactService({ nombre, email, telefono, comentario});
      toast.success("¡Tu mensaje fue enviado satisfactoriamente!");
      setNombre("");
      setEmail("");
      setTelefono("");
      setComentario("");
    } catch (error) {
      setError(error.message);
      setTimeout(() => {
        setError(null);
      }, 5000);
    }
  };
  

  return (
    <>
      <section className="contenedorContact">
        <h2 className="tituloContact">Contáctanos</h2>
        <form className="formContact" onSubmit={handleSubmit}>
          <label>
            <input
              className="inputContact"
              type="text"
              value={nombre}
              required
              onChange={(e) => setNombre(e.target.value)}
              name="name"
              placeholder="Nombre"
            />
          </label>
          <label>
            <input
              className="inputContact"
              type="email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              name="name"
              placeholder="Correo electrónico"
            />
          </label>
          <label>
            <input
              className="inputContact"
              type="tel"
              value={telefono}
              required
              onChange={(e) => setTelefono(e.target.value)}
              placeholder="Teléfono"
            />
          </label>
          <label>
            <textarea
              className="inputContact textareaContact"
              value={comentario}
              required
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Consulta"
            />
          </label>
          <div className="divButtonContact">
            <button className="buttonContact">Enviar</button>
          </div>
        </form>
      </section>
      <div>{error ? <p className="error">{error}</p> : null}</div>
    </>
  );
};
