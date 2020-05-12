/* eslint-disable react/prop-types */
import React from 'react';

const Button = ({ title, className, btnClick }) => {
  return (
    <button type="button" className={className} onClick={btnClick}>
      {title}
    </button>
  );
};

export default Button;
