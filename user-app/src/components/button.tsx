/* eslint-disable react/button-has-type */
import React from 'react';

export type ButtonTypes = 'default' | 'blank';

export type ButtonVariantsProps = {
	buttonStyling: string;
};
export const buttonVariants : Record<ButtonTypes, ButtonVariantsProps> = {
	default: {
		buttonStyling: `
		text-white
        bg-red-500
        hover:bg-red-800
        focus:ring-red-500
		`,
	},
	blank: {
		buttonStyling: `
		text-black
        bg-white
        hover:bg-gray-400
		hover:text-white
		`,
	},
};

type ButtonProps = {
	variant?: ButtonTypes;
	type?: JSX.IntrinsicElements['button']['type'],
} & React.HTMLProps<HTMLButtonElement>;

export const Button:React.FC<ButtonProps> = (props) => {
	const {
		children,
		variant = 'default',
		type = 'button',
		...rest
	} = props;
	return (
		<button
			type={type}
			className={`
                w-full
                flex
                justify-center
                py-2
                px-4
                border
                rounded-md
                shadow-sm
                text-sm
                font-medium
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
				transition
				${buttonVariants[variant].buttonStyling}
			`}
			{...rest}
		>
			{children}
		</button>
	);
};
