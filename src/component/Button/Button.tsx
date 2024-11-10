import "./Button.css"
import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
  }
  
  const Button: React.FC<ButtonProps> = ({ variant, children, ...props }) => {

return (
	<button className={`button ${variant === 'primary' ? 'button-primary' : 'button-secondary'}`} {...props}>
    {children}
  </button>
)
   };
  
  export default Button;