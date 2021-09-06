import React from 'react';

export const CardBody: React.FC<React.ComponentProps<'div'>> = (props) => {
	const { className, children } = props;

	return (
		<div className={`border-t ${className}`}>
			{children}
		</div>
	);
};
