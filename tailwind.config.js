/** @type {import('tailwindcss').Config} */
export default {
  content: ["./*.{html,js}", "./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        bricolage: ['"Bricolage Grotesque"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
