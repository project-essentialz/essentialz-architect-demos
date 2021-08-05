import React from 'react';

const Wrapper = (props : any) => {
	return (
		<div className="wrapper">{props.children}</div>
	);
};

export default Wrapper;
