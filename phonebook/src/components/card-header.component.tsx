import React from 'react';

type CardHeaderProps = {
	title?: string,
}

export const CardHeader: React.FC<CardHeaderProps> = (props) => {
	const { title, children } = props;

	return (
		<div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap px-4 py-5">
			{title && (
				<div className="ml-4 mt-2 px-2">
					<h3 className="text-lg leading-6 font-medium text-gray-900">
						{title}
					</h3>
				</div>
			)}
			<div className="ml-4 mt-2 flex-shrink-0">
				{children}
			</div>
		</div>
	);
};
