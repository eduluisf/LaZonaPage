import React from 'react';
import logo from '../../assets/logoMain.png';

import './Navbar.css'; // Ruta de los estilos de la barra de navegación

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="logo"><img src={logo} alt="Logo" /></li>
        <div className="navList">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Acerca de</a></li>
        <li><a href="#">Servicios</a></li>
        </div>
        <li className="right"><button className="contactButton">Contacto</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
