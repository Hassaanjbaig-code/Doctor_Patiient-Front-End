/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      gridTemplateColumns: {
        17: "30% auto",
        18: "20% auto",
      },
      backgroundColor: {
        parimary: "#0bd10b24",
      },
      textColor: {
        parimary: "#0bd10b",
      },
    },
  },
  plugins: [],
};
