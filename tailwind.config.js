/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.{html,njk}',
    './about/**/*.{html,njk,md}',
    './css/**/*.{html,njk,md}',
    './packages/**/*.{html,njk,md}',
    './*.{html,njk,md}'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

