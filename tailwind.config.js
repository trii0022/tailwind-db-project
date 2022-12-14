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
        tertiary: "#2d86d5",
        background: "#dbeafe",
        blackshade: "#272725",
      },

      fontSize: {
        sm: "1rem",
        md: "1.25rem",
        lg: "1.55rem",
        xl: "2.25rem",
        "2xl": "2.50rem",
      },

      fontFamily: {
        lato: "'Lato', sans-serif",
        montserrat: "'Montserrat', sans-serif",
        paralucent: "'Paralucent', sans-serif",
      },
    },
    plugins: [
      require("@tailwindcss/typography"),
      require("@tailwindcss/forms"),
    ],
  },
  plugins: [require("daisyui")],
};
