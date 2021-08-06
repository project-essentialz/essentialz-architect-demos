import React from 'react';

export const Container = (props : any) => {
	const {
		children,
	} = props;
	return (
		<div className="container scroll">{children}</div>
	);
};
