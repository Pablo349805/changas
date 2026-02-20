import React from 'react';
import './Home.css';

const Portada = ({ image, title, items }) => {
  return (
    <div className="portada-card">
      <div className="portada-image-container">
        <img src={image} alt={title} className="portada-image" />
      </div>
      <div className="portada-content">
        <h2>{title}</h2>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portada;