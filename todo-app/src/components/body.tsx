import React from 'react';

export const Body:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
	const {
		children,
	} = props;
	return (
		<div
			className={`
                w-full
                p-2
                overflow-scroll
                mx-auto
                lg:h-lg
				lg:border-b-2
                sm:h-full
			`}
		>
			{children}
		</div>
	);
};
