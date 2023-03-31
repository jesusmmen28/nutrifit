import React from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from './DropdownMenu';
import "./header.css";


function Header() {
  return (
    <header className='contenedorHeader'>
      <h1 className='tituloPrincipal'>
        <Link className='linkTituloPrincipal' to={"/"} >Nutrifit</Link>
      </h1>
      <DropdownMenu className='contenedorMenu'/>
    </header>
  );
}

export default Header;
