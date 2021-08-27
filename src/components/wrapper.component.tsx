import React from 'react';

export const Wrapper: React.FC<React.HTMLProps<HTMLElement>> = (props : any) => {
	const {
		children,
		className,
	} = props;
	return (
		<div className={`wrapper ${className}`}>{children}</div>
	);
};
