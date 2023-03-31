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
            <li>
                <Link to={"/"} className="linkDropdown">Inicio</Link>
            </li>
            <li>
                <Link to={"/about"} className="linkDropdown">Nosotros</Link>
            </li>
            <li>
                <Link to={"/rutinas"} className="linkDropdown">RUTINAS</Link>
            </li>
            <li>
                <Link to={"/recetas"} className="linkDropdown">RECETAS</Link>
            </li>
            <li>
                <Link to={"/consejos"} className="linkDropdown">CONSEJOS</Link>
            </li>
            <li>
                <Link to={"/contactos"} className="linkDropdown">CONTACTO</Link>
            </li>
            </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
