/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  safelist: ["dark"],

  content: ["./components/**/*.{ts,vue}", "./src/**/*.{ts,tsx,vue}"],

  theme: {
    extend: {},
  },
  plugins: [],
};
