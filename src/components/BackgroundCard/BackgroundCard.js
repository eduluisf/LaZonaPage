import React from 'react';
import './BackgroundCard.css';

const BackgroundCard = ({ title, backgroundImage, description }) => {
  return (
    <div className="background-card">
      <img src={backgroundImage} alt="background" className="background-card-image" />
      <div className="background-card-content">
        <h2 className="background-card-title">{title}</h2>
        <p className="background-card-description">{description}</p>
      </div>
    </div>
  );
};

export default BackgroundCard;
