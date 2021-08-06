import React from 'react';

const Wrapper = (props : any) => {
	const {
		children,
	} = props;
	return (
		<div className="wrapper">{children}</div>
	);
};

export default Wrapper;
