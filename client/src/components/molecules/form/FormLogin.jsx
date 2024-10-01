import React, { useState } from 'react';
import { loginUser } from '../../services/useServices';
import { useNavigate } from 'react-router-dom';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import Title from '../../atoms/title/Title';
import Label from '../../atoms/label/Label';
import Span from '../../atoms/span/Span';

import './form.css';


const FormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault()
    try{
        const data = await loginUser(email, password);
        if(data){
          navigate('/profil')
        }
    } catch(error){
      setErrorMessage(error.response.data.description);
    }
  };

  return (
    <form className="login-screen" onSubmit={handleLogin}>
        <Title className="title-bi">Connexion</Title>
        <p>Connectez-vous en quelques clics</p>
        {errorMessage && <Span className="error-message">{errorMessage}</Span>}
      <div className="form">
        <Label className="label-primary" htmlFor="email" text="Email" />
        <Input
          type="email"
          placeholder="Indiquez votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Label  className="label-primary" hhtmlFor="password" text="Mot de passe" />
        <Input
          type="password"
          placeholder="Indiquez votre mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
          <div className="btn-sumit">
            <Button text="Se connecter"   type="submit" />
          </div>
      </div>
    </form>
  );
};

export default FormLogin;
