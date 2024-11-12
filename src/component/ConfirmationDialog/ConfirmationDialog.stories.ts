import type { Meta, StoryObj } from "@storybook/react";	
import ConfirmationDialog from "./ConfirmationDialog";

const meta = {
	title: 'UI/ConfirmationDialog',
	component: ConfirmationDialog,
	argTypes: {
		message:{
			control: 'text',
			description: 'Message to display in the dialog'
		},
		onConfirm: {
			action: 'confirmed',
			description: 'Action when the confirmation button is clicked'
		},
		onCancel:{
			action: 'canceled',
			description: 'Action when the cancel button is clicked'
		},
		size:{
			controll:{
				type: 'select',
				options: ['small', 'medium', 'large']
			}
		}
	}
} satisfies Meta<typeof ConfirmationDialog>

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story ={
	args:{
message: 'Are you sure you want to proceed medium',
size: 'medium',
	},
}

export const SmallSize: Story ={
	args:{
message: 'Are you sure you want to proceed small ',
size: 'small',
	},
}


export const LargeSize: Story ={
	args:{
message: 'Are you sure you want to proceed large, Are you sure you want to proceed large Are you sure you want to proceed large Are you sure you want to proceed large',

size: 'large',
	},
}
