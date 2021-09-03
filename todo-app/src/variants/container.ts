export type ContainerTypes = 'default' | 'blank';

export type ContainerVariantsProps = {
	containerStyling: string;
};
export const containerVariants : Record<ContainerTypes, ContainerVariantsProps> = {
	default: {
		containerStyling: `
			border-2
			border-solid
			border-grey
			bg-white
			rounded-xl
			shadow-md
			p-2
		`,
	},
	blank: {
		containerStyling: `
			shadow-md
			w-full
			m-2
			p-2
		`,
	},
};
