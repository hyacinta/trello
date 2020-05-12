/* eslint-disable react/prop-types */
import React from 'react';

const Input = ({ id, type, placeholder, inputChange }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    className="inputText"
    onChange={inputChange}
  />
);

export default Input;
