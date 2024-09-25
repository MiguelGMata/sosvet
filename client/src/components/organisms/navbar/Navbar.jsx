import React from 'react';
import NavbarLabel from '../../molecules/nav/NavbarLabel';
import Logo from '../../atoms/logoBtn/Logo';
import './navbar.css'; 


const Navbar = () => {

    return (
        <nav className="navbar-content">
            <Logo className="logo"image="./logososvet.png" />
            <NavbarLabel/>
        </nav>
    );
};
export default Navbar; 
