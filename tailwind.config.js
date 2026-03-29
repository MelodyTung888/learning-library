/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        day: {
          bg: "#F8F6F1",
          text: "#2C3E50",
          accent: "#E8C39E",
          secondary: "#8B7355",
        },
        night: {
          bg: "#0D1117",
          text: "#C9D1D9",
          accent: "#58A6FF",
          secondary: "#8B949E",
        },
        sunny: {
          bg: "#FEF9F3",
          text: "#5C4033",
          accent: "#F4A460",
          secondary: "#8B7355",
        },
      },
      fontFamily: {
        serif: ["Georgia", "serif"],
        sans: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
