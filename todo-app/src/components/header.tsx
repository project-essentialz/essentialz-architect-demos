import React from 'react';

export const Header:React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
	const {
		children,
	} = props;
	return (
		<div
			className={`
                w-full
                p-2
				flex
                flex-row
                justify-between
				border-b-2
				shadow-sm
				z-10
			`}
		>
			{children}
		</div>
	);
};
