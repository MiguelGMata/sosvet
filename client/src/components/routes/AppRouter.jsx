import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import ConnexionScreen from '../pages/login/LoginScreen';
import InscriptionScreen from '../pages/signup/SignupScreen';
import ContactScreen from '../pages/contact/ContactScreen';

const AppRouter = () => {

    return(
        <Routes>
            <Route path="/" element= { <HomeScreen /> } />
            <Route path="/connexion" element= { <ConnexionScreen /> } />
            <Route path="/inscription" element= { <InscriptionScreen /> } />
            <Route path="/contact" element= { <ContactScreen /> } />
        </Routes>
    );
};
export default AppRouter;