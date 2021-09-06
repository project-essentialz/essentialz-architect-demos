/* eslint-disable react/button-has-type */
import React from 'react';

enum Types {
	'button',
	'submit',
	'reset',
	undefined
}

export type ButtonTypes = 'default' | 'warning' | 'error';

export type ButtonVariantsProps = {
	buttonStyling: string;
};
export const buttonVariants : Record<ButtonTypes, ButtonVariantsProps> = {
	default: {
		buttonStyling: `
        bg-blue-500
        hover:bg-blue-800
		`,
	},
	warning: {
		buttonStyling: `
        bg-yellow-500
        hover:bg-yellow-800
		`,
	},
	error: {
		buttonStyling: `
        bg-red-500
        hover:bg-red-800
        `,
	},
};

type ButtonProps = {
	variant?: ButtonTypes;
	type?: Types,
} & React.HTMLProps<HTMLButtonElement>;

export const Button:React.FC<ButtonProps> = (props) => {
	const {
		children,
		variant = 'default',
		...rest
	} = props;
	return (
		<button
			className={`
				border-1
				border-solid
				rounded-lg
				text-white
				p-2
				m-1
				transition
				${buttonVariants[variant].buttonStyling}
			`}
			{...rest}
		>
			{children}
		</button>
	);
};
