import React from "react";
import './SectionOne.css';
import fondo from '../../assets/FONDO.webp';

import 'animate.css';

const SectionOne = () => {
    return (
        <div className="sectionOneContainer ">
            <div className=" textContainer animate__animated animate__fadeInRight">
                
            <p>CONSTRUYENDO</p>
            <h1>PUBLICIDAD</h1>
            </div>
            
            <img className="imgSectionOne animate__animated animate__fadeInLeft" src={fondo} alt="fondo" />
        </div>

    );

}

export default SectionOne;




