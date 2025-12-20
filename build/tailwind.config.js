/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      fontFamily: {
        neuton: ['Neuton', 'serif'],
        rubik: ['Rubik', 'sans-serif'],
      },
    },
  },
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [],
};
