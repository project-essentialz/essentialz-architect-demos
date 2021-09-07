module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			keyframes: {
				'form-show': {
					'0%': {
						opacity: '0',
					},
					'100%': {
						opacity: '1',
					},
				},
			},
			animation: {
				'form-show': 'form-show 0.5s ease-in-out',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
