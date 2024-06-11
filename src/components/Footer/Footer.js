// src/components/Footer/Footer.js
import React from 'react';
import './Footer.css';
import logo from '../../assets/logoMain.png';



function Footer() {
  return (
    <div className="footer">
  <img src={logo} alt="Logo" />
        <h4>
            CONSTRUYAMOS LA MEJOR PUBLICDAD 
        </h4>
      <p>© 2024 LA ZONA PUBLICIDAD. All rights reserved.</p>
    </div>
  );
}

export default Footer;
