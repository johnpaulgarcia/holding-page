import React from "react";
const Input = ({ placeholder, name, value, handleChange }) => {
  return (
    <input
      onChange={handleChange}
      type="text"
      className="input"
      name={name}
      value={value}
      placeholder={placeholder}
    />
  );
};

export default Input;
