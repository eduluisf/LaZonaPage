import React from "react";
import './SectionOne.css';
import fondo from '../../assets/FONDO.png';

const SectionOne = () => {
    return (
        <div className="sectionOneContainer">
            <p>CONSTRUYENDO</p>
            <h1>publicidad</h1>
            <img className="imgSectionOne" src={fondo} alt="fondo" />
        </div>

    );

}

export default SectionOne;




