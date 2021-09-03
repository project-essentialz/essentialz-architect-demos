export type WidthTypes = 'sm' | 'md' | 'xl' | 'lg' | 'default';

export const widthtVariants : Record<WidthTypes, string> = {
	sm: 'w-24',
	md: 'w-52',
	xl: 'w-96',
	lg: 'w-lg',
	default: '',
};
