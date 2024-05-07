import React from "react";
import './SectionThree.css';
import genteDeZona from '../../assets/genteDeZonaBlack.png';

const SectionOne = () => {
    return (
        <div className="sectionThreeContainer">

             <div className="sectionThreeContent">
                  <h3> Nuestros clientes</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <img className="imgTHree-one" src={genteDeZona} alt="fondo" />
        </div>

    );

}

export default SectionOne;




