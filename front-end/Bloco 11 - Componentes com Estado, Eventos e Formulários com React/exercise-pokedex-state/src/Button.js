import React from "react";
import "./App";

const Button = ({ className, children, disabled, onClick }) => (
  <button
    onClick={ onClick }
    className={`button-text ${className}`}
    disabled={ disabled }
  >
    { children }
  </button>
);

export default Button;