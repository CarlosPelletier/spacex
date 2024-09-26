/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'herobg': "url('/src/assets/images/herobg.png')",
        'herobg-sm': "url('/src/assets/images/herobg-sm.png')",
        'herobg-md': "url('/src/assets/images/herobg-md.png')",
      }
    },
  },
  plugins: [],
}