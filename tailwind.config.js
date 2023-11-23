/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD467",
        secondary: "#FF8D76",
        tertiary: "#CDA1FF",
        skyBlue: "#6EB2FF",
        lightGray: "#E1E1E1",
        dimGray: "#343A40",
        coolGray: "#111827 ",
        darkGray: "#1C1C1C",
      },
      fontFamily: {
        santoshi: ["Satoshi", "sans-serif"],
        bauziet: ["BauzietRgular", "sans-serif"],
        redHatDisplay: ["Red Hat Display", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
