import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import LogoBtn from '../../atoms/logoBtn/LogoBtn';

import './NavbarLabel.css';


const NavbarLabel = ({ activeBtn, handleClick }) => {
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
            <ul>
                <li className={activeBtn === 'home' ? 'active' : '' } onClick={() => handleClick('home')}>
                    <Link to="/" className="navbar-btn">
                        <LogoBtn image="./home.png"/>
                        <span>Accueil</span>
                    </Link>
                </li>
                <li className={activeBtn === 'connexion' ? 'active' : '' } onClick={() => handleClick('connexion')}>
                    <Link to="/connexion" className="navbar-btn">
                        <LogoBtn image="./connexion.png"/>
                        <span>Connexion</span>
                    </Link>
                </li>
                <li className={activeBtn === 'inscription' ? 'active' : '' } onClick={() => handleClick('inscription')}>
                    <Link to="/inscription" className="navbar-btn">
                    <LogoBtn image="./inscription.png"/>
                    <span>Inscription</span>  
                    </Link>
                </li>
                <li className={activeBtn === 'contact' ? 'active' : '' } onClick={() => handleClick('Contact')}>
                    <Link to="/contact" className="navbar-btn">
                        <LogoBtn image="./veto.png"/>
                        <span>Contact</span>
                    </Link>
                </li>
            </ul>        

        </div>
    );

    const login = (
        <div className="navbar-label">
            <ul>
                <li className={activeBtn === 'home' ? 'active' : '' } onClick={() => handleClick('home')}>
                    <Link to="/" className="navbar-btn">
                        <LogoBtn image="./home.png"/>
                        <span>Accueil</span>
                    </Link>
                </li>
                <li className={activeBtn === 'profil' ? 'active' : '' } onClick={() => handleClick('profil')}>
                    <Link  to="/profil" className="navbar-btn">
                        <LogoBtn image="./user.png"/>
                        <span>Profil</span>
                    </Link>
                </li>
                <li className={activeBtn === 'animal' ? 'active' : '' } onClick={() => handleClick('animal')}>
                    <Link to="/animal" className="navbar-btn">
                        <LogoBtn image="./inscription.png"/>
                        <span>Animal</span>  
                    </Link>
                </li>
                <li className={activeBtn === 'veterinaire' ? 'active' : '' } onClick={() => handleClick('veterinaire')}>
                    <Link to="/veterinaire" className="navbar-btn">
                        <LogoBtn image="./veto.png"/>
                        <span>Veterinaire</span>
                    </Link>
                </li>
                <li>
                    <button onClick={logOut} className="navbar-btn">
                        <LogoBtn image="./deconnecter.png" />
                        <span>Déconnexion</span>
                    </button>
                </li>
            </ul>    
        </div>
    );

    return (
        <>
            {localStorage.token ? login : logout}
        </>

    );
};
export default NavbarLabel;


/**                <div className="navbar-btn">
                    <Link to="/" className={activeBtn === 'home' ? 'active' : '' } onClick={() => handleClick('home')}>
                    <LogoBtn image="./home.png"/>
                    <span>Accueil</span>
                    </Link>
                </div>
       
                <Link to="/connexion" className={activeBtn === 'connexion' ? 'active' : '' } onClick={() => handleClick('connexion')}>
                <div className="navbar-btn">
                    <LogoBtn image="./connexion.png"/>
                    <span>Connexion</span>
                </div>
            </Link>
            <div to="/inscription" className="navbar-btn">
     
            </div>
            <div to="/contact" className="navbar-btn">
     
            </div> */