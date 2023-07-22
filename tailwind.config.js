/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        auto: "auto 1fr",
      },
      maxHeight: {
        mobile: "100lvh",
      },
      width: {
        mobile: "100lvw",
      },
    },
  },
  plugins: [],
}
