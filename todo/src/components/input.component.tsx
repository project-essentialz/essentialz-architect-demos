import React from 'react';

import { Container } from '.';

export const Input: React.FC<React.HTMLProps<HTMLInputElement>> = (props) => {
	const {
		className,
		...rest
	} = props;
	return (
		<Container>
			<input
				className={`
					transition-all
					bg-gray-200
					appearance-none
					border-2
					border-gray-200
					rounded
					py-2
					px-4
					text-gray-700
					focus:outline-none
					focus:bg-white
					focus:border-blue-500
					${className}
				`}
				{...rest}
			/>
		</Container>
	);
};
