import React from 'react';
import Title from '../../atoms/title/Title';
import Image from '../../atoms/image/image';
import './cardVeterinarians.css';

const CardVeterinarians = ({ nom, adresse, lieux, postal, phone, pictures }) => {
  return (
    <div className="card-veterinarians">
      <Image image={pictures} width='60%' height='200px'/>
      <div className="card-header-veterinarians">
        <Title className="title-card">{`${nom}`}</Title>
      </div>
      <div className="card-body-veterinarians">
        <p><strong>Adresse :</strong>{adresse}</p>
        <p><strong>Lieux :</strong>{lieux}</p>
        <p><strong>Postal :</strong>{postal}</p>
        <p><strong>Phone :</strong>{phone}</p>
      </div>
    </div>
  );
};

export default CardVeterinarians;