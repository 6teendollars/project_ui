import React from "react";
import './ConfirmationDialog.css'
import Button from "../Button";

export interface ConfirmationDialogProps extends React.HTMLAttributes<HTMLDivElement>{
	message: string;
	onConfirm: () => void;
	onCancel: () => void;
	size?: 'small' | 'medium' | 'large'
}

const ConfirmationDialog: React.FC<ConfirmationDialogProps> = ({ message, onConfirm, onCancel ,size, ...props }) =>{
return(
	<div className={`dialog-overlay dialog-${size}`}{...props}>
		<div className="dialog-box">
			<p className="dialog-message">{message}</p>
			<div className="dialog-actions">
				<Button onClick={onConfirm} variant="primary" size={size}>Confirm</Button>
				<Button onClick={onCancel} variant="secondary" size={size}>Cancel</Button>
			</div>
		</div>
	</div>
)
}

export default ConfirmationDialog; 