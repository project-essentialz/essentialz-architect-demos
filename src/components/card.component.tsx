import React from 'react';

export type CardProps = {
	header?: any;
	title: string;
	description: string;
	footer?: any;
} & React.HTMLProps<HTMLDivElement>;

export const Card = (props : CardProps) : React.ReactElement => {
	const {
		header = '',
		title,
		description,
		footer = '',
		className,
	} = props;
	return (
		<div className={`max-w-sm rounded overflow-hidden shadow-lg text-center m-5 ${className}`}>
			<div className="pl-32 pr-32">
				{header}
			</div>
			<div className="px-6 py-4">
				<div className="font-bold text-xl mb-2">{title}</div>
				<p className="text-gray-700 text-base">
					{description}
				</p>
			</div>
			<div className="px-6 pt-4 pb-2 mb-5">
				{footer}
			</div>
		</div>
	);
};
