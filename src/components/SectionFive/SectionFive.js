// SectionFive.js
import React from 'react';
import './SectionFive.css';
import MapContainer from './MapContainer'; // Importación con nombre
import pinLocation from '../../assets/pinLocation.png';

const SectionFive = () => {

    return (

        <div className='sectionFiveContainer-Super'>
            <div className='sectionFiveContainer'>
                <div className='sectionFiveContent-main'>
                    <div className='sectionFiveContent' >
                        <h3>Donde encontrarnos</h3>
                        <h4>Calle 54 #45- 16 Riohacha, La Guajira</h4>
                    </div>
                    <img className="imgLogoLocation" src={pinLocation} alt="" />
                </div>
            </div>

            <div className='mapContainer-Main'>
                <div className='mapContainer'>
                    <MapContainer />
                </div>
            </div>
        </div>
    );
}

export default SectionFive;
