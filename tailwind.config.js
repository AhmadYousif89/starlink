/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
	content: ['./build/**/*.{html,js}'],
	theme: {
		extend: {
			screens: {
				xs: '400px',
				ws: { raw: '(min-aspect-ratio: 3/2)' },
				ts: { raw: '(min-aspect-ratio: 13/20)' },
				...defaultTheme.screens,
			},
			keyframes: {
				'open-menu': {
					'0%': { transform: 'scaleX(0)' },
					'100%': { transform: 'scaleX(1)' },
				},
				'close-menu': {
					'0%': { transform: 'scaleX(1)' },
					'100%': { transform: 'scaleX(0)' },
				},
			},
			animation: {
				'open-menu': 'open-menu 0.5s ease-in-out',
				'close-menu': 'close-menu 0.5s ease-in-out',
			},
		},
	},
	plugins: [],
};
