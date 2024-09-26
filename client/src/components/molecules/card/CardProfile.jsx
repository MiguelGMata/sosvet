import React from 'react';
import Title from '../../atoms/title/Title';
import './cardProfile.css';

const CardProfile = ({ firstName, lastName, email }) => {
  return (
    <div className="card-profile">
      <div className="card-header">
        <Title className="title-card">{`${firstName} ${lastName}`}</Title>
      </div>
      <div className="card-body">
        <p><strong>Prénom:</strong> {firstName}</p>
        <p><strong>Nom:</strong> {lastName}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default CardProfile;
