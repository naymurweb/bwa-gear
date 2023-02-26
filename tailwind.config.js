/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1F2E35",
        secondary: "#0086D6",
        primaryDark: "#333E44",
        secondaryDark: "#475E69",
        myWhite: "#FFFFFF",
        myGreen: "#2BA093",
        myRed: "#FF3366",
        myYellow: "#FFC942",
        myBg1: "#F5F5F5",
        myBg2: "#E1EBFB",
        myBg3:'#F9F9F9'
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
