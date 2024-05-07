import React from "react";
import './SectionThree.css';
import image3_1 from '../../assets/Image3_1.png';

const SectionOne = () => {
    return (
        <div className="sectionThreeContainer-Main">

             <div className="sectionThreeContainer">
                     <div className="sectionThreeContent">
                  <h3> Nuestros clientes</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                     <img className="imgTHree-one" src={image3_1 } alt="fondo" />
            </div>
        </div>




    );

}

export default SectionOne;




