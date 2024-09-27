import React from 'react';
import './button.css';

const Button = ({ text, type, onClick }) => {
  return (
    <button className="button" type={type} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
