/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/button-has-type */
import React from 'react';
import { Container } from '.';

type ButtonVariants = 'error' | 'purple' | 'default' | 'warning';

type ButtonVariantProps = {
	styling: string;
};

type ButtonProps = {
	variant?: ButtonVariants;
};

const variants : Record<ButtonVariants, ButtonVariantProps> = {
	default: {
		styling: 'bg-blue-500 shadow hover:bg-purple-400 font-bold rounded',
	},
	purple: {
		styling: `
		relative
		inline-flex
		items-center
		border
		border-transparent
		text-sm
		font-medium
		bg-indigo-600
		hover:bg-indigo-700
		focus:ring-2
		focus:ring-offset-2
		focus:ring-indigo-500	
		shadow-sm
		font-medium
		rounded-md
		`,
	},
	error: {
		styling: 'bg-red-500 shadow hover:bg-purple-400 font-bold rounded',
	},
	warning: {
		styling: 'bg-yellow-500 shadow hover:bg-purple-400 font-bold rounded',
	},
};

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = (props) => {
	const {
		children,
		type = 'button',
		className,
		variant = 'default',
		...rest
	} = props;
	return (
		<Container>
			<button
				className={`
				${variants[variant].styling}
				focus:shadow-outline
				focus:outline-none
				text-white
				py-2
				px-4
				${className}
				`}
				type={type}
				{...rest}
			>
				{children}
			</button>
		</Container>
	);
};
