import React from 'react';

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
	const { className, ...rest } = props;

	return (
		<button
			type="button"
			className={`
				px-4
				py-2
				border
				border-transparent
				shadow-sm
				text-sm
				font-medium
				rounded-md
				text-white
				bg-indigo-600
				hover:bg-indigo-700
				focus:outline-none
				focus:ring-2
				focus:ring-offset-2
				focus:ring-indigo-500
				flex 
				items-center
				${className}
				`}
			{...rest}
		/>
	);
};
