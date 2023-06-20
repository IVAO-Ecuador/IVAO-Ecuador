/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
	  './pages/**/*.{js,ts,jsx,tsx,mdx}',
	  './components/**/*.{js,ts,jsx,tsx,mdx}',
	  './app/**/*.{js,ts,jsx,tsx,mdx}',
	],
  
	darkMode: 'class',
  
	theme: {
	  screens: {
		  sm: '400px',
		  md: '650px',
		  lg: '870px',
		  xl: '1220px',
	  },
	  container: {
		  center: true,
	  },
	  colors: {
		  'bg-color': '#0d1117',
		  'main-purple': '#785eff',
		  'text-color': '#d2d3e0bf',
		  'main-green': '#2faf5a',
		  'text-white': '#ffffff',
		  'dark-blue': '#13111C',
		  'hover-color': '#37384b42',
		  'sub-menus': '#1D1E2B',
		  'light-blue': '#306EE8',
		  'text-blue': '#A8C0F0',

		  'gray': 'hsl(246,  6%, 55%)',
		  'gray-200': 'hsl(246,  8%, 35%)',
		  'pink': 'hsl(270, 55%, 43%)', // Events
		  'blue': 'hsl(220, 80%, 55%)', // Resources
		  'cyan': 'hsl(180, 50%, 44%)', // Trainings
		  'green': 'hsl(152, 38%, 42%)', // Exams
		  'yellow': 'hsl(44, 74%, 52%)',
		  'red': 'hsl(1, 62%, 44%)',
	  }
	},
	plugins: [],
  }