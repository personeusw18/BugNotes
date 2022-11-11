/** @type {import('tailwindcss').Config} */
module.exports = {
  tailwindConfig: './styles/tailwind.config.js',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cursive: ['Cedarville Cursive']
      }

    },
  },
  plugins: [],
}
