import React from 'react';

import { Container } from '.';

type ListElementProps = {
	element: any;
	icon?: any;
	button?: any;
}

export const ListElement = (props : ListElementProps) => {
	const {
		element,
		icon,
		button,
	} = props;
	return (
		<li className="py-4">
			<div className="flex space-x-3">
				{icon}
				<div className="flex-1 space-y-1">
					<div className="flex items-center justify-between">
						{element}
					</div>
				</div>
				{button}
			</div>
		</li>
	);
};

export const List = (props : React.HTMLProps<HTMLElement>) => {
	const {
		children,
		className,
	} = props;
	return (
		<Container>
			<ul className={`divide-y divide-gray-200 ${className}`}>
				{children}
			</ul>
		</Container>
	);
};
