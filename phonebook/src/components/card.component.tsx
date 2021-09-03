import React from 'react';

type CardProps = {
	title: string,
	action?: React.ReactChild
}

export const Card: React.FC<CardProps> = (props) => {
	const { title, action, children } = props;

	return (
		<div className="bg-white border-b border-gray-200 shadow sm:rounded-md">
			<div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap px-4 py-5">
				<div className="ml-4 mt-2 px-2">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						{title}
					</h3>
				</div>
				<div className="ml-4 mt-2 flex-shrink-0">
					{action}
				</div>
			</div>
			<div className="border-t">{children}</div>
		</div>
	);
};
