import type { HTMLAttributes, LabelHTMLAttributes } from "vue";

export const labelClass = `block mb-2 text-sm font-medium leading-none peer-disabled:bg-red-900 peer-disabled:opacity-70`;

export const descriptionLabelClass = `mt-2 text-sm`;

export const labelVariants = {
  default: `text-gray-900 dark:text-white`,
  success: `text-green-700 dark:text-green-500`,
  error: `text-red-700 dark:text-red-500`,
};
export type LabelVariants = keyof typeof labelVariants;

export interface LabelProps extends /* @vue-ignore */ LabelHTMLAttributes {
  variant?: LabelVariants;
}

export interface DescriptionLabelProps
  extends /* @vue-ignore */ HTMLAttributes {
  variant?: LabelVariants;
}

export { default as Label } from "./Label.vue";
export { default as DescriptionLabel } from "./DescriptionLabel.vue";
