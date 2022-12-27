/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        viewport: 'var(--viewport-bg)',
        primary: 'var(--primary-color)',
        subtitle: 'var(--subtitle-color)',
        title: 'var(--title-color)',
        card: 'var(--card-bg)',
        'sub-card': 'var(--sub-card-stroke)',
        tab: 'var(--tab-bg)',
      },
    },
  },
  plugins: [],
}
