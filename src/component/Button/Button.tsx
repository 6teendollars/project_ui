import "./Button.css"
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: 'primary' | 'secondary';
  }
  
  const Button: React.FC<ButtonProps> = ({ variant = 'primary', ...props }) => {
const colorClasses = () => {
	if (variant == 'primary') return {borderColor: '#6366F1', backgroundColor: '#6366F1', color: '#FAFAFA'};
	if (variant == 'secondary') return {borderColor: '#6366F1', backgroundColor: '#6366F1', color: '#FAFAFA'}
return{}
}

return (
	<button style={{...colorClasses(), ...props.style }} {...props}>
		{props.children}
	</button>
)
   };
  
  export default Button;