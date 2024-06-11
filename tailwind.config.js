/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode : "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Light Theme
        "light-bg" : "#F2F5EA",


        // Dark Theme
        "dark-bg" : "#000"
      },
    },
    screens: {
      'TV': {'max': '2560px'},
      
      'large-desktop': {'max': '1600px'},

      'mid-desktop': {'max': '1200px'},

      'small-desktop': {'max': '1024px'},

      'tablet': {'max': '768px'},

      'small-tablet': {'max': '640px'},
      
      'large-mobile': {'max': '450px'},
      
      'mid-mobile': {'max': '375px'},

      'small-mobile': {'max': '325px'},
    }
  },
  plugins: [],
};