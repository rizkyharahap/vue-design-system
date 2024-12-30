import type { InputHTMLAttributes } from "vue";

export const baseClass = `block w-full rounded-lg border disabled:pointer-events-none disabled:opacity-60`;

export const inputVariants = {
  default: `border-gray-300 bg-gray-50 text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500`,
  success: `border-green-500 bg-green-50 text-green-900 placeholder-green-700 focus:border-green-500 focus:ring-green-500 dark:border-green-500 dark:bg-gray-700 dark:text-green-400 dark:placeholder-green-500`,
  error: `border-red-500 bg-red-50 text-red-900 placeholder-red-700 focus:border-red-500 focus:ring-red-500 dark:border-red-500 dark:bg-gray-700 dark:text-red-500 dark:placeholder-red-500`,
};
export type InputVariants = keyof typeof inputVariants;

export const inputSizes = {
  sm: `p-2 text-xs`,
  normal: `p-2.5 text-sm`,
  lg: `p-4 text-base`,
};
export type InputSizes = keyof typeof inputSizes;

export interface InputPropsProps extends /* @vue-ignore */ InputHTMLAttributes {
  variant?: InputVariants;
  size?: InputSizes;
}

export { default as Input } from "./Input.vue";
