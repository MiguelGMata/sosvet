import React, { useState } from 'react';
import NavbarLabel from '../../molecules/nav/NavbarLabel';
import Logo from '../../atoms/logoBtn/Logo';
import './navbar.css'; 


const Navbar = () => {
    const [activeBtn, setActiveBtn]= useState(null);

    const handleActiveBtn = (Btn) => {
        setActiveBtn(Btn);
    }


    return (
        <nav className="navbar-content">
            <Logo className="logo"image="./logososvet.png" />
            <NavbarLabel 
                activeBtn={activeBtn} 
                handleClick={handleActiveBtn}
            />
        </nav>
    );
};
export default Navbar; 
