import React, { useState } from 'react';
import Span from '../../atoms/span/Span';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import Title from '../../atoms/title/Title';
import Label from '../../atoms/label/Label';
import Select from '../../atoms/select/Select';
import './formAnimal.css';

const FormAnimal = ({ animalData, onChange, onSubmit }) => {


  const speciesOptions = [
    { value: 'chien', label: 'Chien' },
    { value: 'chat', label: 'Chat' },
    { value: 'lapin', label: 'Lapin' },
    { value: 'Cheval', label: 'Cheval' },
    { value: 'oiseau', label: 'Oiseau' },
    { value: 'autre', label: 'Autre' },
  ];

  const colorOptions = [
    { value: 'blanc', label: 'Blanc' },
    { value: 'noir', label: 'Noir' },
    { value: 'marron', label: 'Marrón' },
    { value: 'gris', label: 'Gris' },
    { value: 'pluricolore ', label: 'Pluricolore' },
    { value: 'autre', label: 'Autre' },
  ];

  return (
    <form className="form-animal" onSubmit={onSubmit}>
      <Title className="title-form">Animal</Title>
      <div className="form">

        <div className="form-group-inline">
          <div className="form-field">
            <Label htmlFor="nom" text="Nom" />
            <Input
              type="text"
              name="nom"
              placeholder="Nom de votre animal"
              value={animalData.nom}
              onChange={onChange}
            />
          </div>
          <div className="form-field">
            <Label htmlFor="race" text="Race" />
            <Input
              type="text"
              name="race"
              placeholder="Race de votre animal"
              value={animalData.race}
              onChange={onChange}
            />
          </div>
        </div>

        <div className="form-group-inline">
          <div className="form-field">
            <Label htmlFor="espece" text="Espèce" />
            <Select
              name="espece"
              placeholder="Espèce de votre animal"
              value={animalData.espece}
              onChange={onChange}
              options={speciesOptions}
            />
          </div>
          <div className="form-field">
            <Label htmlFor="couleur" text="Couleur" />
            <Select
              name="couleur"
              placeholder="Couleur de votre animal"
              value={animalData.couleur}
              onChange={onChange}
              options={colorOptions}
            />
          </div>

        </div>
        <div className="form-group-inline">
          <div className="form-field">
            <Label text="Sexe" />
            <div className="radio-group">
              <Input
                type="radio"
                name="sexe"
                value="femele"
                checked={animalData.sexe === 'femele'}
                onChange={onChange}
              />
              <Label htmlFor="couleur" text="Femelle" />
              <Input
                type="radio"
                name="sexe"
                value="male"
                checked={animalData.sexe === 'male'}
                onChange={onChange}
              />
              <Label htmlFor="couleur" text="Mâle" />
            </div>
          </div>
          <div className="form-field">
            <Label text="Stérilisation" />
            <div className="radio-group">
              <Input
                type="radio"
                name="sterilisation"
                value="oui"
                checked={animalData.sterilisation === 'oui'}
                onChange={onChange}
              />
              <Label htmlFor="oui" text="  Oui" />
              <Input
                type="radio"
                name="sterilisation"
                value="non"
                checked={animalData.sterilisation === 'non'}
                onChange={onChange}
              />
              <Label htmlFor="couleur" text="   Non" />
            </div>
          </div>
        </div>

        <div className="form-group-inline">
          <div className="form-field">
            <Label htmlFor="poids" text="Poids" />
            <Input
              type="text"
              name="poids"
              placeholder="Indiquez le poids de votre animal"
              value={animalData.poids}
              onChange={onChange}
            />
          </div>
          <div className="form-field">
            <Label htmlFor="date_naissance" text="Date de naissance" />
            <Input
              type="date"
              name="date_naissance"
              value={animalData.date_naissance.slice(0, 10)}
              onChange={onChange}
            />
          </div>
        </div>
        <div className="form-field">
          <Label htmlFor="information" text="Informations" />
          <Input
            type="text"
            name="information"
            placeholder="Ajoutez des informations sur votre animal"
            value={animalData.information}
            onChange={onChange}
          />
        </div>
        <div className="btn-sumit">
          <Button text="Ajouter" type="submit" />
        </div>
      </div>
    </form>
  );
};

export default FormAnimal;

