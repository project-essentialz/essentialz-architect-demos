import React from 'react';

export const Container:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
	const { children } = props;
	return (
		<div
			className={`
                min-h-screen
                bg-gray-50
                flex
                flex-col
                justify-center
                py-12
                sm:px-6
                lg:px-8
            `}
		>
			{children}
		</div>
	);
};
