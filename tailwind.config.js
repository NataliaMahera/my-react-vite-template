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
      'secondary-text-color': 'rgba(18, 20, 23, 0.8)',
      'card-text-color': '#8a8a89',
      'icon-color': 'rgba(18, 20, 23, 0.9)',
      'accent-color': '#f4c550',
      'accent-color-btn': '#ffdc86;',
      'secondary-accent-color': '#fbe9ba',
      'bg-color': '#fff',
      'bg-primary-color': '#f8f8f8',
      'border-color': 'rgba(18, 20, 23, 0.1)',
      'decor-text-element': 'rgba(18, 20, 23, 0.2)',
      'decor-text-color': 'rgba(18, 20, 23, 0.7)',
      'error-color': '#da1414',
      'correct-color': '#3cbc81',
      'green-color': '#38cd3e',
    },
  },
  plugins: [],
};
