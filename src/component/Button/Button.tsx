import "./Button.css"
import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large';
  }
  
  const Button: React.FC<ButtonProps> = ({ variant, children,size, ...props }) => {

return (
	<button className={`button ${variant === 'primary' ? 'button-primary' : 'button-secondary'} button-${size}`} {...props}>
    {children}
  </button>
)
   };
  
  export default Button;