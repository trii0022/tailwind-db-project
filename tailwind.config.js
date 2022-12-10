module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "640px",

      md: "1150px",

      lg: "1200px",

      xl: "1400px",

      "2xl": "1455px",
    },
    extend: {
      colors: {
        primary: "#3295ED",
        secondary: "#45473B",
        background: "#DBEAFE",
        blackshade: "#272725",
        tertiary: "#2d86d5",
      },

      fontSize: {
        sm: "1rem",
        md: "1.25rem",
        lg: "1.55rem",
        xl: "2.25rem",
        "2xl": "2rem",
      },

      fontFamily: {
        lato: "'Lato', sans-serif",
        montserrat: "'Montserrat', sans-serif",
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  },
  plugins: [require("daisyui")],
};
