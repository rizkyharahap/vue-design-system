<script setup lang="ts">
import { buttonClass, type ButtonProps, buttonSizes, buttonVariants } from ".";

withDefaults(defineProps<ButtonProps>(), {
  variant: "default",
  size: "normal",
  color: "blue",
});
</script>
<template>
  <button
    :class="`${buttonClass} ${buttonSizes[size]} ${buttonVariants[variant][color]}`"
  >
    <slot />
  </button>
</template>
