import React from 'react';

const Container = (props : any) => {
	const {
		children,
	} = props;
	return (
		<div className="container scroll">{children}</div>
	);
};

export default Container;
