/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4A96FF",
        light: "#6B6C70",
        neutral: "#C5C7CA",
        dark: "#131319",
        foreground: "#27292D",
        placeholder: "#7F8084",
      },
    },
  },
  plugins: [],
};
