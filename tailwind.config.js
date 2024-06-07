/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					50: '#fff2f1',
					100: '#ffe1e0',
					200: '#ffcac7',
					300: '#ffa4a0',
					400: '#ff716a',
					500: '#f9544c',
					600: '#e6251c',
					700: '#c21b13',
					800: '#a01a14',
					900: '#841d18',
					950: '#480a07'
				},
				secondary: {
					50: '#eef4ff',
					100: '#e0ebff',
					200: '#c6d8ff',
					300: '#a4bdfd',
					400: '#8099f9',
					500: '#6175f3',
					600: '#444ee7',
					700: '#363bcc',
					800: '#2f35a4',
					900: '#2d3482',
					950: '#15173c'
				}
			}
		}
	},
	plugins: []
};
