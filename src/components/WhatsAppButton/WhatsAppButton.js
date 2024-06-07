import React from 'react';
import { FaWhatsapp,FaFacebookF,FaInstagram } from 'react-icons/fa';
import './WhatsAppButton.css';

const WhatsAppButton = ({ phoneNumber }) => {
  return (
      <ul className='iconsContainer'>

     
        <li>
              <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
             >
            <FaWhatsapp color={'white'} size={40} />
          </a>
        </li>
        <li>
              <a
            href={`https://www.instagram.com/lazonapublicidad/`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
             >
            <FaInstagram color={'white'} size={40} />
          </a>
        </li>
        <li>
              <a
            href={`https://www.facebook.com/Lazonapublicidad`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-button"
             >
            <FaFacebookF color={'white'} size={40} />
          </a>
        </li>


      </ul>


    
  );
};

export default WhatsAppButton;
