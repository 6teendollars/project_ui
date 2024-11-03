import "./Button.css"
import React from "react";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
  }
  
  const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
const colorClasses = () => {
	if (variant == 'primary') return {};
	if (variant == 'secondary') return {}
return{}
}

return (
	<button style={{...colorClasses(), ...props.style }} {...props}>
		{props.children}
	</button>
)
   };
  
  export default Button;