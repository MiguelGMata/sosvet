import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { signupUser } from '../../services/useServices';
import Span from '../../atoms/span/Span';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import Title from '../../atoms/title/Title';
import Label from '../../atoms/label/Label';
import MessageModal from '../../atoms/modal/MessageModal';
import './form.css';

const FormSignup = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [isSignupSuccessful, setIsSignupSuccessful] = useState(false);


  const handleSignup = async () => {
    try {
        setError(null); // Reinicia el estado de error antes de intentar registrar
        const userData = {
          first_name: firstName,
          last_name: lastName,
          email: email,
          password: password,
        };

        const response = await signupUser(userData); 
          if(response.status){
            setSuccessMessage(response.status);
            setShowModal(true); 
            setIsSignupSuccessful(true); // puede navegar
          }else if(response.error){
            setSuccessMessage(response.error);
            setShowModal(true); 
            setIsSignupSuccessful(false); //no puede navergar
          }
      
      } catch (err) {
        console.log(err.message)
        setError(err.message); // Establece el mensaje de error devuelto por `signupUser`
      }
  };

  const closeModal = () => {
    setShowModal(false);
    // Si el registro fue exitoso, espera un poco antes de redirigir
    if (isSignupSuccessful) {
      setTimeout(() => {
        navigate('/connexion');
    }, 500); 
  }
  };

  return (
    <form className="login-screen">
      <Title className="title-bi">Inscription</Title>
      <p>Inscrivez-vous en quelques clics</p>
      {error && <Span className="error-message">{error}</Span>} {/* Muestra el mensaje de error */}
      {showModal && <MessageModal message={successMessage} onClose={closeModal} />}
      <div className="form">
        <Label  className="label-primary" hhtmlFor="firstName" text="Prénom" />
        <Input
          type="text"
          placeholder="Indiquez votre prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Label  className="label-primary" hhtmlFor="lastName" text="Nom" />
        <Input
          type="text"
          placeholder="Indiquez votre nom"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <Label  className="label-primary" hhtmlFor="email" text="Email" />
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
          <Button text="S'inscrire !" onClick={handleSignup} />
        </div>
      </div>
    </form>
  );
};

export default FormSignup;
