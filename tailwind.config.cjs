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
        disable: 'var(--disable-color)',
        tab: 'var(--tab-bg)',
      },
      gridTemplateColumns: {
        'tabs-container': '1fr 2fr',
      },
    },
  },
  plugins: [],
}
