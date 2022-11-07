/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9333EA',
        subtitle: '#6B7280',
      },
    },
  },
  plugins: [],
}
