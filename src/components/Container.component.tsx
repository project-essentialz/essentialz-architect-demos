import React from 'react';

const Container = (props : any) => {
	return (
		<div className="container scroll">{props.children}</div>
	);
};

export default Container;
