import React from 'react';
import './Navbar.css';
import logo from '../../assets/logoMain.png';

const Navbar = ({ setCurrentView }) => (
  <nav>
    <ul>
      <li className="logo"><img src={logo} alt="Logo" /></li>
      <div className="navList">
        <li><button className="listButtons"  onClick={() => setCurrentView('home')}>Nosotros</button></li>
        <li><button  className="listButtons"onClick={() => setCurrentView('services')}>Servicios</button></li>
        <li><button  className="listButtons"onClick={() => setCurrentView('projects')}>Proyectos</button></li>
      </div>
      <li className="right"><button className="contactButton">Contacto</button></li>
    </ul>
  </nav>
);

export default Navbar;
