import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBtn from '../../atoms/logoBtn/LogoBtn';

import './NavbarLabel.css';


const NavbarLabel = () => {
    const navigate = useNavigate();

    const logOut = () => {
        e.preventDefault();
        try {
          localStorage.removeItem('token');
          navigate('/'); // Redirige al inicio
        } catch (error) {
          console.error('Error during logout:', error);
        }
    };
    const logout = (
        <div className="navbar-label">
            <Link to="/" className="navbar-btn">
                <LogoBtn image="./home.png"/>
                <span>Accueil</span>
            </Link>
            <Link to="/connexion" className="navbar-btn">
                <LogoBtn image="./connexion.png"/>
                <span>Connexion</span>
            </Link>
            <Link to="/inscription" className="navbar-btn">
                <LogoBtn image="./inscription.png"/>
                <span>Inscription</span>   
            </Link>
            <Link to="/contact" className="navbar-btn">
                <LogoBtn image="./veto.png"/>
                <span>Contact</span>
            </Link>
        </div>
    );

    const login = (
        <div className="navbar-label">
            <Link to="/" className="navbar-btn">
                <LogoBtn image="./home.png"/>
                <span>Accueil</span>
            </Link>
            <Link to="/profil" className="navbar-btn">
                <LogoBtn image="./user.png"/>
                <span>Profil</span>
            </Link>
            <Link to="/animal" className="navbar-btn">
                <LogoBtn image="./inscription.png"/>
                <span>Soins</span> 
            </Link>
            <Link to="/veterinaire" className="navbar-btn">
                <LogoBtn image="./veto.png"/>
                <span>Veterinaire</span>
            </Link>
            <button onClick={logOut} className="navbar-btn">
                <LogoBtn image="./deconnecter.png" />
                <span>Déconnexion</span>
            </button>
        </div>
    );

    return (
        <>
            {localStorage.token ? login : logout}
        </>

    );
};
export default NavbarLabel;