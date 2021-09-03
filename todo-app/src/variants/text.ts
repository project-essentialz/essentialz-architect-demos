export type TextSizeTypes = 'sm' | 'lg' | 'xl' | '2xl';
export type TextAlignmentTypes = 'left' | 'right' | 'center';

export const textSizeVariants : Record<TextSizeTypes, string> = {
	sm: 'text-sm',
	lg: 'text-lg',
	xl: 'text-xl',
	'2xl': 'text-2xl',
};

export const textAlignmentVariants : Record<TextAlignmentTypes, string> = {
	left: 'text-left',
	right: 'text-right',
	center: 'text-center',
};
