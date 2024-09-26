import React from 'react';
import Title from '../../atoms/title/Title';
import './cardProfile.css';


const CardAnimal = ({ nom, espece,  race, couleur, sexe, poids, sterilisation, date_naissance, information  }) => {
  return (
    <div className="card-profile">
      <div className="card-header">
        <Title>{`${nom}`}</Title>
      </div>
      <div className="card-body">
        <p><strong>Espèce :</strong>{espece}</p>
        <p><strong>Race :</strong>{race}</p>
        <p><strong>Couleur :</strong>{couleur}</p>
        <p><strong>Sexe :</strong>{sexe}</p>
        <p><strong>Poids :</strong>{poids}</p>
        <p><strong>Sterilisation :</strong>{sterilisation}</p>
        <p><strong>Date_naissance :</strong>{date_naissance}</p>
        <p><strong>Information :</strong>{information}</p>
      </div>
    </div>
  );
};

export default CardAnimal;