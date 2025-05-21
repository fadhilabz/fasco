/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // kalau pakai Next.js App Router
  ],
  theme: {
    extend: {
      fontFamily: {
        volkhov: ["Volkhov", "serif"],
      },
    },
  },
  plugins: [],
};
