import React, { useState } from "react";
const Input = ({
  placeholder,
  name,
  textvalue,
  handleChange,
  customClass,
  error = false,
}) => {
  const [activeClass, setActiveClass] = useState("");

  const handleBlur = ({ target: { value } }) => {
    if (value.length <= 0) {
      setActiveClass("input-error");
    } else {
      setActiveClass("");
    }
  };

  return (
    <input
      onChange={handleChange}
      onBlur={handleBlur}
      type="text"
      className={`input ${activeClass} ${customClass} ${error}`}
      name={name}
      value={textvalue}
      placeholder={placeholder}
    />
  );
};

export default Input;
