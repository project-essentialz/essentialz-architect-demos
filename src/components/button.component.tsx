/* eslint-disable react/button-has-type */
import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
	const {
		children,
		type = 'button',
		className,
		...rest
	} = props;
	return (
		<div>
			<button
				className={`
				shadow
				bg-blue-500
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
