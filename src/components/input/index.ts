import type { InputHTMLAttributes } from "vue";

export const baseClass =
  "inline-flex items-center rounded-lg font-medium focus:outline-none focus:ring-2 transition-colors";

export const inputVariants = {
  default: {
    blue: "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800",
    gray: "bg-gray-700 text-white hover:bg-gray-800 focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800",
    green:
      "bg-green-700 text-white hover:bg-green-800 focus:ring-green-300 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800",
    red: "bg-red-700 text-white hover:bg-red-800 focus:ring-red-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800",
    yellow:
      "bg-yellow-700 text-white hover:bg-yellow-800 focus:ring-yellow-300 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800",
  },
  outlined: {
    blue: "border border-blue-700 text-blue-700 hover:bg-blue-800 hover:text-white focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-500 dark:hover:text-white dark:focus:ring-blue-800",
    gray: "border border-gray-800 text-gray-900 hover:bg-gray-900 hover:text-white focus:ring-gray-300 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:ring-gray-800",
    green:
      "border border-green-700 text-green-700 hover:bg-green-800 hover:text-white focus:ring-green-300 dark:border-green-500 dark:text-green-500 dark:hover:bg-green-500 dark:hover:text-white dark:focus:ring-green-800",
    red: "border border-red-700 text-red-700 hover:bg-red-800 hover:text-white focus:ring-red-300 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-500 dark:hover:text-white dark:focus:ring-red-800",
    yellow:
      "border border-yellow-400 text-yellow-400 hover:bg-yellow-500 hover:text-white focus:ring-yellow-300 dark:border-yellow-300 dark:text-yellow-300 dark:hover:bg-yellow-400 dark:hover:text-white dark:focus:ring-yellow-900",
  },
};
export type InputVariants = keyof typeof inputVariants;
export type InputColors = keyof typeof inputVariants.default;

export const inputSizes = {
  xs: "px-3 py-2 text-xs",
  sm: "px-3 py-2 text-sm",
  normal: "px-5 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-base",
};
export type InputSizes = keyof typeof inputSizes;

export interface InputPropsProps extends /* @vue-ignore */ InputHTMLAttributes {
  variant?: InputVariants;
  size?: InputSizes;
  color?: InputColors;
}

export { default as Input } from "./Input.vue";
