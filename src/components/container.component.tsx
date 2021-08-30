import React from 'react';

export const Container: React.FC<React.HTMLProps<HTMLDivElement>> = (props) => {
	const {
		children,
		...rest
	} = props;
	return (
		<div {...rest}>{children}</div>
	);
};
