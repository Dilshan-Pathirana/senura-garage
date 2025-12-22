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
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Oswald', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
