import React from "react";

export interface ButtonProps {
  className: string;
  label?: string;
}
const Button: React.FC<ButtonProps> = ({ className, label = "" }) => (
  <button className={`btn ${className}`}>{label}</button>
);

export default Button;
