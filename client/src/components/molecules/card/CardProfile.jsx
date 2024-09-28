import React from 'react';
import Title from '../../atoms/title/Title';
import Image from '../../atoms/image/image';
import './cardProfile.css';

const CardProfile = ({ firstName, lastName, email }) => {
  return (
    <div className="card-profile-container">
      <div className="card-profile-card">
        <div className="card-profile-header">
          <Image className="card-profile-avatar" image="https://ik.imagekit.io/logoMGM/sosvet/logo-.webp?updatedAt=1727378751576" width="100px" height="100px"/>
          <Title className="title-card">{`${firstName} ${lastName}`}</Title>
        </div>
        <div className="card-profile-info">
          <p><strong>Prénom:</strong> {firstName}</p>
          <p><strong>Nom:</strong> {lastName}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
