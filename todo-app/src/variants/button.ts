export type ButtonTypes = 'default' | 'warning' | 'error';

export type ButtonVariantsProps = {
	buttonStyling: string;
};
export const buttonVariants : Record<ButtonTypes, ButtonVariantsProps> = {
	default: {
		buttonStyling: `
        border-1
        border-solid
        rounded-lg
        bg-blue-500
        text-white
        p-2
		m-1
        transition
        hover:bg-blue-800
		`,
	},
	warning: {
		buttonStyling: `
		`,
	},
	error: {
		buttonStyling: `
        `,
	},
};
