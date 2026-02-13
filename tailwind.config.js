/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        surface: {
          primary: 'var(--bg-primary)',
          soft: 'var(--bg-soft)',
          card: 'var(--bg-card)',
        },
        border: 'var(--border)',
        accent: 'var(--accent)',
      },
    },
  },
  plugins: [],
};
