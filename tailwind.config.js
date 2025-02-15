/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {},
    screens: { 'xs': '200px', 'sm': '640px', 'md': '768px', 'lg': '1024px', }
  },
  plugins: [],
}
