/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: { 
		screens: {
			'2sm': '280px',
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1500px',
			'3xl': '1800px',
		},
		fontFamily: {
			sans: ['Roboto', 'sans-serif'],
		},
	},
	plugins: [],
};
