/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        RedHatText: ["Red Hat Text"],
      },
    },
    fontWeight: {
      normal: "300",
      semibold: "600",
      bold: "700",
    },
    screens: {
      sm: "375px",
      md: "800px",
      lg: "1440px",
    },
  },
  plugins: [],
};
