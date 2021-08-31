/* eslint-disable react/button-has-type */
import React from 'react';

type ButtonVariants = 'error' | 'default' | 'warning';

type ButtonVariantProps = {
	styling: string;
};

type ButtonProps = {
	variant?: ButtonVariants;
};

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps> = (props) => {
	const {
		children,
		type = 'button',
		className,
		variant = 'default',
		...rest
	} = props;
	const variants : Record<ButtonVariants, ButtonVariantProps> = {
		default: {
			styling: 'bg-blue-500',
		},
		error: {
			styling: 'bg-red-500',
		},
		warning: {
			styling: 'bg-yellow-500',
		},
	};
	return (
		<div>
			<button
				className={`
				shadow
				${variants[variant].styling}
				hover:bg-purple-400
				focus:shadow-outline
				focus:outline-none
				text-white
				font-bold
				py-2
				px-4
				rounded
				${className}
				`}
				type={type}
				{...rest}
			>
				{children}
			</button>
		</div>
	);
};
