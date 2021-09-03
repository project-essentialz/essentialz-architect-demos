/* eslint-disable react/no-unused-prop-types */
import React from 'react';

import { Container } from '.';

type ListElementVariants = 'grid' | 'inline';

type ListElementVariantsProps = {
	styling: string;
	elementQueue: (props : any) => JSX.Element;
}

type ListElementProps = {
	element: any;
	icon?: any;
	button?: any;
	variant?: ListElementVariants;
}

const variants : Record<ListElementVariants, ListElementVariantsProps> = {
	inline: {
		styling: 'py-4',
		elementQueue: ({
			icon,
			element,
			button,
		} : ListElementProps) => (
			<div className="flex space-x-3">
				{icon}
				<div className="flex-1 space-y-1">
					<div className="flex items-center justify-between">
						{element}
					</div>
				</div>
				{button}
			</div>
		),
	},
	grid: {
		styling: `col-span-1
		flex
		flex-col
		text-center
		bg-white
		rounded-lg
		shadow
		divide-y
		divide-gray-200`,
		elementQueue: ({ element } : ListElementProps) => element,
	},
};

export const ListElement = (props : ListElementProps) => {
	const {
		variant = 'inline',
		...rest
	} = props;
	return (
		<li className={variants[variant].styling}>
			{variants[variant].elementQueue(rest)}
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
