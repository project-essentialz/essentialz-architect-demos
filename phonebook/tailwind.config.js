const colors = {
	'essentialz-red': '#E64E4E',
	'essentialz-blue': '#0070F4',
	'essentialz-yellow': '#FFCA00',
	'essentialz-light-gray': '#D0D2D4',
	'essentialz-darker-gray': '#585858',
	'essentialz-darkest-gray': '#101012',
	'essentialz-gray': '#979797',
};

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			textColor: {
				...colors,
			},
			backgroundColor: {
				...colors,
			},
			borderColor: {
				...colors,
			},
			height: {
				96: '75vh',
			},
			width: {
				100: '520px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
