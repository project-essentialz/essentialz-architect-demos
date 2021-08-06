import React from 'react';

export const Wrapper = (props : any) => {
	const {
		children,
	} = props;
	return (
		<div className="wrapper">{children}</div>
	);
};
