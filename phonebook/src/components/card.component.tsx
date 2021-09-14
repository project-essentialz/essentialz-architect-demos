import React from 'react';

export const Card: React.FC = (props) => {
	const { children } = props;

	return (
		<div className="bg-white border-b border-gray-200 shadow sm:rounded-md">
			{children}
		</div>
	);
};
