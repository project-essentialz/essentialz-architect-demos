module.exports = {
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			height: {
				lg: '500px',
			},
			width: {
				lg: '500px',
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
