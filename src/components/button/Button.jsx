import React from "react";
import './button.css';
import { string } from 'prop-types';


const Button = ({ label }) => {
  return (
    <div data-testId="button" className="button-style">
      {label}
    </div>
  );
};

Button.propTypes = {
  label: string
};

export default Button;
