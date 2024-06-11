import React from 'react';
import './ServiceBanner.css';

const SectionWithBackground = ({ title, backgroundImage, description }) => {
  return (
    <section className="section-with-background">
      <div className="background-container">
        <img src={backgroundImage} alt="background" className="background-image" />
        <div className="text-content">
          <h2 className="title">{title}</h2>
          <p className="description">{description}</p>
        </div>
      </div>
    </section>
  );
};

export default SectionWithBackground;
