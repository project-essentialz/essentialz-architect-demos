import React from 'react';

export const Form : React.FC<React.HTMLProps<HTMLFormElement>> = (props) => {
	const {
		children,
		...rest
	} = props;
	return (
		<form
			{...rest}
		>
			{children}
		</form>
	);
};
