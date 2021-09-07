import React from 'react';

type TextSizeTypes = 'sm' | 'lg' | 'xl' | '2xl';
type TextAlignmentTypes = 'left' | 'right' | 'center';

const textSizeVariants : Record<TextSizeTypes, string> = {
	sm: 'text-sm',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
};

const textAlignmentVariants : Record<TextAlignmentTypes, string> = {
	left: 'text-left',
	right: 'text-right',
	center: 'text-center',
};

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
