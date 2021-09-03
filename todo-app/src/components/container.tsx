import React from 'react';

import {
	ContainerTypes,
	HeightTypes,
	WidthTypes,
	containerVariants,
	heightVariants,
	widthtVariants,
} from '../variants';

type ContainerProps = {
	variant?: ContainerTypes;
	centered?: boolean;
	flex?: boolean;
	flexDirection?: 'flex-col' | 'flex-row';
	spaceBetween?: boolean;
	overflow?: 'overflow-scroll' | 'overflow-visible' | 'overflow-none';
	height?: HeightTypes;
	width?: WidthTypes;
} & React.HTMLProps<HTMLDivElement>;

export const Container:React.FC<ContainerProps> = (props) => {
	const {
		children,
		variant = 'default',
		centered = false,
		overflow = 'visible',
		flex = false,
		spaceBetween = false,
		flexDirection = '',
		height = 'default',
		width = 'default',
	} = props;
	return (
		<div
			className={`
				${containerVariants[variant].containerStyling}
				${centered ? 'mx-auto' : ''}
				${flex ? `flex ${flexDirection}` : ''}
				${spaceBetween ? 'justify-between' : ''}
				${heightVariants[height]}
				${widthtVariants[width]}
				${overflow}
			`}
		>
			{children}
		</div>
	);
};
