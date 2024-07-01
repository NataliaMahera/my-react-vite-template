/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        sm: '50px',
        md: '100px',
        lg: '128px',
      },
    },
    colors: {
      'primary-text-color': '#121417',
    },
  },
  plugins: [],
};
