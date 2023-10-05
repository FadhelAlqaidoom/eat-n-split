import React from 'react';
import '../index.css';

const Button = ({ children, className, onClick }) => {
  return (
    <button className={`${className} button`} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
