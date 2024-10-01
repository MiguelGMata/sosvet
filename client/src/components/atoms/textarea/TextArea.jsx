import React from 'react';

const TextArea = ({ placeholder, value, onChange, name }) => {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="input"
    />
  );
};

export default TextArea;