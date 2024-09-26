import React from 'react';
import './label.css';

const Label = ({ htmlFor, text }) => {
  return (
    <label htmlFor={htmlFor} className="label">
      {text}
    </label>
  );
};

export default Label;
