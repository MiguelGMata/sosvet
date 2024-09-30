import React from 'react';
import './input.css';

const Input = ({ type, placeholder, value, onChange, checked, name }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      checked={checked} 
      className="input"
    />
  );
};

export default Input;
