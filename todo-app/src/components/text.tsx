import React from 'react';

import {
	TextAlignmentTypes,
	TextSizeTypes,
	textAlignmentVariants,
	textSizeVariants,
} from '../variants';

type TextProps = {
	fontSize?: TextSizeTypes;
	alignment?: TextAlignmentTypes;
} & React.HTMLProps<HTMLParagraphElement>;

export const Text:React.FC<TextProps> = (props) => {
	const {
		children,
		fontSize = 'lg',
		alignment = 'left',
	} = props;
	return (
		<p
			className={`
            ${textSizeVariants[fontSize]}
            ${textAlignmentVariants[alignment]}
            font-light
            `}
		>
			{children}
		</p>
	);
};
