import React, { useState, useEffect } from 'react';
import './cookies.css'; // Asegúrate de que la ruta sea correcta

const CookieConsent = () => {
  // Función para obtener una cookie por su nombre
  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  // Función para establecer una cookie
  const setCookie = (name, value, days) => {
    const expires = new Date(Date.now() + days * 864e5).toUTCString(); // Fecha de expiración de la cookie
    document.cookie = `${name}=${value}; expires=${expires}; path=/`; // Creamos la cookie con nombre, valor y expiración
  };

  // Estado para controlar si se muestra o no el banner
  const [showBanner, setShowBanner] = useState(!getCookie('cookies_accepted'));

  // useEffect para ejecutar código después del primer renderizado
  useEffect(() => {
    // Si la cookie ya está presente, no mostramos el banner
    if (getCookie('cookies_accepted')) {
      setShowBanner(false);
    }
  }, []); // El array vacío asegura que este efecto solo se ejecute una vez al cargar el componente

  // Maneja el clic en "Aceptar"
  const handleAccept = () => {
    setCookie('cookies_accepted', 'true', 365); // Guardamos la cookie por un año
    setShowBanner(false); // Ocultamos el banner
  };

    // Maneja el clic en "Rejeter"
    const handleReject = () => {
      setCookie('cookies_accepted', 'false', 365); // Guardamos la cookie por un año
      setShowBanner(false); // Ocultamos el banner
    };

  // Si el banner no debe mostrarse, retornamos null para no renderizar nada
  if (!showBanner) return null;

  return (
    // El banner que se muestra en la parte inferior de la página
    <div className="cookie-banner">
      <h3>Nous respectons votre vie privée.</h3>
      <p>Nous utilisons des cookies pour améliorer votre expérience de navigation, diffuser des publicités ou des contenus personnalisés et analyser notre trafic.</p>
      <button onClick={handleAccept} className="cookie-button">Accepter</button>
      <button onClick={handleReject} className="cookie-button">Refuser</button>
    </div>
  );
};

export default CookieConsent;

