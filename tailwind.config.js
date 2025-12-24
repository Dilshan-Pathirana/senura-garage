/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        bg: 'rgb(var(--dm-bg) / <alpha-value>)',
        surface: 'rgb(var(--dm-surface) / <alpha-value>)',
        text: 'rgb(var(--dm-text) / <alpha-value>)',
        muted: 'rgb(var(--dm-muted) / <alpha-value>)',
        accent: 'rgb(var(--dm-accent) / <alpha-value>)',
        border: 'rgb(var(--dm-border) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"Bebas Neue"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.05em',
      },
      backgroundImage: {
        'mesh-pattern': 'radial-gradient(circle at 2px 2px, rgb(var(--dm-accent) / 0.15) 1px, transparent 0)',
      },
    },
  },
  plugins: [],
}
