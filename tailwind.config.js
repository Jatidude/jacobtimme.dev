module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      brown: "#222831",
    },
    textColor: {
      primary: "#EEEEEE",
      secondary: "#393E46",
      accent: "#B55400",
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
