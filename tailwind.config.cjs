/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sansSerif: ['Source Sans 3', 'sans-serif'],
			mono: ['Source Code Pro', 'monospace'],
			handwriting: ['Kalam', 'cursive']
		},
		extend: {
			colors: {
				lavendarIndigo: '#8657e1',
				daisyBush: '#4714a5',
				goldenFizz: '#feff40',
				whisper: '#f9f4f9',
				pastelPurple: '#b2a1bb',
				purple: '#7209b7',
				robinEggBlue: '#00e9c0',
				blueGem: '#3813a0',
				caribbeanGreen: '#1cc6a0',
				scarlet: '#f72f45',
				monsoon: '#777878',
				silver: '#c0c0c0',
				gallery: '#efeaf2',
				fog: '#decaec',
				white: '#ffffff'
			},
			zIndex: {
				navBarToggle: 91,
				navBar: 90
			}
		}
	},
	plugins: []
};
