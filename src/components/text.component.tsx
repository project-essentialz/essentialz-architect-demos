import React from 'react';

export const Text:React.FC<React.HTMLProps<HTMLParagraphElement>> = (props) => {
	const {
		children,
	} = props;
	return <p>{children}</p>;
};
