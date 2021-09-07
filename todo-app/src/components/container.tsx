import React from 'react';

export const Container:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
	const {
		children,
	} = props;
	return (
		<div
			className={`
				flex
				flex-col
				mx-auto
				border-2
				border-solid
				border-grey
				bg-white
				p-2
				md:w-lg lg:w-3/5
				md:mt-20
				md:rounded-xl
				sm:rounded-none
			`}
		>
			{children}
		</div>
	);
};
