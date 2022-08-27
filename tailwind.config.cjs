const typography = require('@tailwindcss/typography');
const animationDelay = require('tailwindcss-animation-delay');

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		fontFamily: {
			sans: 'Inter'
		},
		extend: {
			colors: {
				brand: '#11a683'
			},
			keyframes: {
				float: {
					'0%, 100%': { transform: 'scale(1) translateY(0px)' },
					'50%': { transform: 'scale(1.2) translateY(-50px) rotate(45deg)' }
				}
			},
			animation: {
				float: 'float 20s linear infinite'
			}
		}
	},

	plugins: [typography, animationDelay]
};

module.exports = config;
