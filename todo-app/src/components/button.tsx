/* eslint-disable react/button-has-type */
import React from 'react';

import {
	ButtonTypes,
	buttonVariants,
} from '../variants';

enum Types {
	'button',
	'submit',
	'reset',
	undefined
}

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
			className={`${buttonVariants[variant].buttonStyling}`}
			{...rest}
		>
			{children}
		</button>
	);
};
