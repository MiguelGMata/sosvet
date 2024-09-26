import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from '../pages/home/HomeScreen';
import ConnexionScreen from '../pages/login/LoginScreen';
import InscriptionScreen from '../pages/signup/SignupScreen';
import ContactScreen from '../pages/contact/ContactScreen';
import ProfileScreen from '../pages/profile/ProfileScreen';
import AnimalScreen from '../pages/animal/AnimalScreen';
import VeterinarianScreen from '../pages/veterinarian/VeterinarianScreen';

const AppRouter = () => {

    return(
        <Routes>
            <Route path="/" element= { <HomeScreen /> } />
            <Route path="/connexion" element= { <ConnexionScreen /> } />
            <Route path="/inscription" element= { <InscriptionScreen /> } />
            <Route path="/contact" element= { <ContactScreen /> } />
            <Route path="/profil" element= { <ProfileScreen /> } />
            <Route path="/animal" element= { <AnimalScreen /> } />
            <Route path="/veterinaire" element= { <VeterinarianScreen /> } />
        </Routes>
    );
};
export default AppRouter;