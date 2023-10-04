/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  important: true,
  corePlugins: {
    preflight: false
  },
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))"
      },
      gridTemplateColumns: {
        auto: "auto 1fr"
      },
      keyframes: {
        "animate-visibility": {
          "0%": { opacity: 0, scale: 0.5 },
          "100%": { opacity: 1, scale: 1 }
        }
      },
      animation: {
        "copy-button": "animate-visibility 0.5s ease-in-out forwards"
      }
    }
  },
  plugins: []
};
