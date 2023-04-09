import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "./dropdownMenu.css";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="dropdown">
      <Link onClick={toggleMenu}>
        <GiHamburgerMenu className="menuHamburguesa" />
      </Link>
      {isOpen && (
        <div className="contenedorUlDropdown">
            <ul className="ulDropdown">
            <li className="liDropdown">
                <Link to={"/"} className="linkDropdown">Inicio</Link>
            </li>
            <li className="liDropdown">
                <Link to={"/about"} className="linkDropdown">Nosotros</Link>
            </li>
            <li className="liDropdown">
                <Link to={"/rutinas"} className="linkDropdown">Rutinas</Link>
            </li>
            <li className="liDropdown">
                <Link to={"/recetas"} className="linkDropdown">Recetas</Link>
            </li>
            <li className="liDropdown">
                <Link to={"/consejos"} className="linkDropdown">Consejos</Link>
            </li>
            <li className="liDropdown">
                <Link to={"/planes"} className="linkDropdown">Planes</Link>
            </li>
            <li className="liDropdown">
                <Link to={"/contact"} className="linkDropdown">Contacto</Link>
            </li>
            </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
