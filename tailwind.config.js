/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#e87532',
        heading: '#0f2943',
        text: '#0a0f14',
      },
      fontFamily: {
        sans: ['Roboto', 'system-ui', 'sans-serif'],
        heading: ['Questrial', 'sans-serif'],
        nav: ['Noto Sans', 'sans-serif'],
      },
      animation: {
        'morph': 'morph 15s linear infinite',
      },
      keyframes: {
        morph: {
          '0%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
          '25%': { borderRadius: '58% 42% 75% 25% / 76% 46% 54% 24%' },
          '50%': { borderRadius: '50% 50% 33% 67% / 55% 27% 73% 45%' },
          '75%': { borderRadius: '33% 67% 58% 42% / 63% 68% 32% 37%' },
          '100%': { borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%' },
        },
      },
    },
  },
  plugins: [],
}
