import React, { useState } from 'react';
import Span from '../../atoms/span/Span';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import Title from '../../atoms/title/Title';
import Label from '../../atoms/label/Label';
import Select from '../../atoms/select/Select';
import './formAnimal.css';

const FormAnimal = ({ animalData, onChange, onSubmit }) => {

return (
  <form className="form-animal" onSubmit={onSubmit}>
    <Title className="title-form">Animal</Title> 
          <Label htmlFor="nom" text="Nom" />
          <Input
            type="text"
            name="nom"
            placeholder="Nom de votre animal"
            value={animalData.nom}
            onChange={onChange}
          />    
          <Input
            type="text"
            name="espece"
            placeholder="Race de votre animal"
            value={animalData.espece}
            onChange={onChange}
          />   
          <Input
            type="text"
            name="race"
            placeholder="Race de votre animal"
            value={animalData.race}
            onChange={onChange}
          />  
          <Input
            type="text"
            name="couleur"
            placeholder="Race de votre animal"
            value={animalData.couleur}
            onChange={onChange}
          />  
          <Input
            type="text"
            name="sexe"
            placeholder="Race de votre animal"
            value={animalData.sexe}
            onChange={onChange}
          />  
          <Input
            type="text"
            name="poids"
            placeholder="Race de votre animal"
            value={animalData.poids}
            onChange={onChange}
          />  
          <Input
            type="text"
            name="sterilisation"
            placeholder="Race de votre animal"
            value={animalData.sterilisation}
            onChange={onChange}
          />  
          <Input
            type="text"
            name="information"
            placeholder="Race de votre animal"
            value={animalData.information}
            onChange={onChange}
          />  
          <Input
            type="text"
            name="date_naissance"
            placeholder="Race de votre animal"
            value={animalData.date_naissance}
            onChange={onChange}
          />  

      <Button text="Ajouter votre animal" type="submit"/>
  </form>
);
};

export default FormAnimal;
