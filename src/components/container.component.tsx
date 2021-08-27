import React from 'react';

export const Container: React.FC<React.HTMLProps<HTMLElement>> = (props) => {
	const {
		children,
		className,
	} = props;
	return (
		<div className={`container ${className} `}>{children}</div>
	);
};
