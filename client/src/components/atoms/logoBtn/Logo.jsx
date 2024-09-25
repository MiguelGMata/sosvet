import React from 'react';
import './logo.css';

const Logo = ( { image, className }) => {

    return <img className={`logo ${className}`} src={image}/>
};
export default Logo;