import './Card.css'
import React from 'react'
import Button from '../Button';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement>{
	variant?: 'available' | 'unavailable';
	size?: 'small' | 'medium' | 'large';
	imageSrc?: string;
};

const Card: React.FC<CardProps> = ({ variant ,size, imageSrc, children, ...props}) =>{
	return (
		<div className={`card ${variant === 'available' ? 'card-available' : 'card-unavailable'} card-${size}`} {...props}>
			{imageSrc && (
				<div className='card-image-container'>
					<img src={imageSrc} alt="Card Image" className='card-image' />
				</div>
			)}
			<div className='card-content'>
			{children}
			</div>
		<Button  variant='primary' children='Action' size={size}/>
		</div>
	)
};

export default Card;