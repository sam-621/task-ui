/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#9333EA',
        'primary-opacity': 'rgba(147, 51, 234, 0.06)',
        title: '#404040',
        subtitle: '#6B7280',
        card: '#FFF',
        input: '#F3F3F3',
      },
    },
  },
  plugins: [],
}
