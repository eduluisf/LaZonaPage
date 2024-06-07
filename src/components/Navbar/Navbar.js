import React from 'react';
import logo from '../../assets/logoMain.png';

import './Navbar.css'; // Ruta de los estilos de la barra de navegación

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="logo"><img src={logo} alt="Logo" /></li>
        <div className="navList">
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Proyectos</a></li>
        </div>
        <li className="right"><button className="contactButton">Contacto</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
