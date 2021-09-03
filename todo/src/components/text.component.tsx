import React from 'react';

export const Text:React.FC<React.HTMLProps<HTMLParagraphElement>> = (props) => {
	const {
		children,
		...rest
	} = props;
	return <p {...rest}>{children}</p>;
};
