module.exports = {
	purge: [],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			keyframes: {
				'form-show': {
					'0%': {
						transform: 'rotateY(90deg)',
					},
					'100%': {
						transform: 'rotateY(0)',
					},
				},
			},
			animation: {
				'form-show': 'form-show 1s ease-in-out',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
