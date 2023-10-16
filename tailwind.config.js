/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "moderate-cyan": "hsl(176, 50%, 47%)",
        "dark-cyan": "hsl(176, 72%, 28%)",
        "dark-gray": "hsl(0, 0%, 48%)",
        "light-gray": "#F4F4F4",
        light: "#FAFAFA",
        dark: "#2F2F2F",
      },
      screens: {
        lg: "992px",
        xl: "1358px",
      },
      container: {
        padding: {
          DEFAULT: "24px",
          md: "44px",
        },
      },
      boxShadow: {
        custom:
          "0 100px 140px -50px rgba(0,0,0,0.25), 0 0 20px 0 rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
};
