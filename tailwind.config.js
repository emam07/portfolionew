/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '80': '80px',  // Custom margin-top of 80px
        '100': '100px', // Custom margin-top of 100px
      },
      width: {
        '500': '500px', // Custom width of 500px
      },
      height: {
        '500': '500px', // Custom height of 500px
      },
    },
  },
  plugins: [],
}
