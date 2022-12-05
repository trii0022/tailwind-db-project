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
      },

      fontSize: {
        sm: ".75rem",
        md: "1rem",
        lg: "1.25rem",
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
