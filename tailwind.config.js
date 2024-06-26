module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  corePlugins: {
    aspectRatio: false,
  },
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
