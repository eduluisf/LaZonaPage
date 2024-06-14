// src/Contact.js
import React, { useState } from 'react';
import './Contact.css';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import genteDeZonaOrange from '../../assets/GENTE ZONA ORANGE.webp'
import 'animate.css';
const Contact = () => {


  return (
    <div className="contact-container">
      <div className="LeftContactContent-Containter">

      <img src={genteDeZonaOrange}></img>
      
      
      </div>


      <div className="RightContactContent-Containter">
        <button className="ButtonContainer animate__animated animate__fadeInRight">
          <FaWhatsapp className="icon"  size={28}/>
         <p>WHATSAPP</p> 
        </button>
        <button className="ButtonContainer animate__animated animate__fadeInRight">
          <FaInstagram className="icon"  size={28}/>
         <p>INSTAGRAM</p> 
        </button>
        <button className="ButtonContainer animate__animated animate__fadeInRight">
          <FaEnvelope className="icon"  size={28}/>
       <p>EMAIL</p>   
        </button>
        <button className="ButtonContainer animate__animated animate__fadeInRight">
          <FaPhone className="icon"  size={28}/>
         <p>EMAIL</p> 
        </button>
      </div>
    </div>
  );
};

export default Contact;
