export type HeightTypes = 'sm' | 'md' | 'xl' | 'lg' | 'default';

export const heightVariants : Record<HeightTypes, string> = {
	sm: 'h-24',
	md: 'h-52',
	xl: 'h-96',
	lg: 'h-lg',
	default: '',
};
