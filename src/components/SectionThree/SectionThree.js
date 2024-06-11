import React from "react";
import './SectionThree.css';
import image3_1 from '../../assets/Image3_1.png';
import BackgroundCard from '../BackgroundCard/BackgroundCard';
import 'animate.css';

const SectionThree = () => {
    return (
        <div className="sectionThreeContainer-Main">

            <div className="sectionThreeContainer">
                <div className="sectionThreeContent">
                    <h3> Nuestros clientes</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </div>
                <div className="imgThree-one  animate__animated animate__fadeInRight">
                    <BackgroundCard title="Mi Título" backgroundImage={image3_1} description="asdasdasdasdasd"
                    />
                </div>
            </div>

            <div className="sectionThreeContent-Two">
                <div className="imgThree-1">
                    <BackgroundCard title="Mi Título" backgroundImage={image3_1} description="asdasdasdasdasd"
                    />
                </div>
                <div className="imgThree-2">
                    <BackgroundCard title="Mi Título" backgroundImage={image3_1} description="asdasdasdasdasd"
                    />
                </div>
            </div>

            <div className="sectionThreeContent-Three">
            <div className="imgThree-3">
                    <BackgroundCard title="Mi Título" backgroundImage={image3_1} description="asdasdasdasdasd"
                    />
                </div>
                <div className="imgThree-4">
                    <BackgroundCard title="Mi Título" backgroundImage={image3_1} description="asdasdasdasdasd"
                    />
                </div>
            </div>



        </div>




    );

}

export default SectionThree;




