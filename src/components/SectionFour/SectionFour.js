import React from "react";
import './SectionFour.css';
import image4_1 from '../../assets/Image4_1.png';

const SectionFour = () => {
    return (
        <div className="sectionFourContainer-Main">

             <div className="sectionFourContainer">
                <div className="sectionFourContent">
                  <h3>  Nuestros Servicios</h3>
                    </div>

                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
             </div>

            <div className="sectionFourContent-Two">
                <img className="imgFour-1" src={image4_1 } alt="fondo" />
                <img className="imgFour-2" src={image4_1 } alt="fondo" />
            </div>

            <div className="sectionFourContent-Three">
                <img className="imgFour-3" src={image4_1 } alt="fondo" />
                <img className="imgFour-4" src={image4_1 } alt="fondo" />
            </div>
        

        
        </div>




    );

}

export default SectionFour;




