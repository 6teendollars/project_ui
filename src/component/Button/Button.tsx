export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
  }
  
  const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
	const colorClass = variant === 'primary' ? 'blue' : 'gray';
	return (
	  <button style={{ backgroundColor: colorClass }} {...props}>
		{props.children}
	  </button>
	);
  };
  
  export default Button;