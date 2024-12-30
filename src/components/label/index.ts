import type { LabelHTMLAttributes } from "vue";

export const baseClass = `block mb-2 text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70`;

export const labelVariants = {
  default: `text-gray-900 dark:text-white`,
  success: `text-green-700 dark:text-green-500`,
  error: `text-red-700 dark:text-red-500`,
};
export type LabelVariants = keyof typeof labelVariants;

export interface LabelProps extends /* @vue-ignore */ LabelHTMLAttributes {
  variant?: LabelVariants;
}

export { default as Label } from "./Label.vue";
