/* eslint-disable react/button-has-type */
import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
	const {
		children,
		type = 'button',
		...rest
	} = props;
	return (
		<button type={type} {...rest}>{children}</button>
	);
};
