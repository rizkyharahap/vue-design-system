import plugin from "./src/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],

  content: ["./components/**/*.{ts,vue}", "./src/**/*.{ts,tsx,vue}"],

  theme: {
    extend: {},
  },
  plugins: [plugin],
};
