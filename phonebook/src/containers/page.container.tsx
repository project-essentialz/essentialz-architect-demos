import React from 'react';

export const PageContainer: React.FC = (props) => {
	const { children } = props;

	return (
		<div className="container mx-auto py-16">
			{children}
		</div>
	);
};
