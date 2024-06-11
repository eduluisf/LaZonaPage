import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import './Navbar.css';
import logo from '../../assets/logoMain.png';

const Navbar = ({ setCurrentView }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='navContainer'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <FaBars className="hamburger" size={25} onClick={toggleMenu} />
      <div className={`navList ${isOpen ? 'open' : ''}`}>
        <ul >
          <li><button className="listButtons" onClick={() => setCurrentView('home')}>Nosotros</button></li>
          <li><button className="listButtons" onClick={() => setCurrentView('services')}>Servicios</button></li>
          <li><button className="listButtons" onClick={() => setCurrentView('projects')}>Proyectos</button></li>
        </ul>
        <button className="contactButton">Contacto</button>
      </div>
    </nav>
  );
};

export default Navbar;
