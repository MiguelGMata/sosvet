import React, { useState } from 'react';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import Title from '../../atoms/title/Title';
import Label from '../../atoms/label/Label';
import './form.css';


const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Lógica de inicio de sesión
  };

  return (
    <div className="login-screen">
        <Title className="title-form">Inscription</Title>
        <p>Inscrivez-vous en quelques clics</p>
      <div className="form">
      <Label htmlFor="firstName" text="Prénom" />
        <Input
          type="text"
          placeholder="Indiquez votre prenom"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="lastName" text="Nom" />
        <Input
          type="text"
          placeholder="Indiquez votre nom"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Label htmlFor="email" text="Email" />
        <Input
          type="email"
          placeholder="Indiquez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label htmlFor="password" text="Mot de passe" />
        <Input
          type="password"
          placeholder="Indiquez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button text="S'inscrire!" onClick={handleLogin} />
      </div>
    </div>
  );
};

export default FormLogin;