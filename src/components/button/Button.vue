<script setup lang="ts">
import { baseClass, type ButtonProps, buttonSizes, buttonVariants } from ".";

withDefaults(defineProps<ButtonProps>(), {
  variant: "default",
  size: "normal",
  color: "blue",
});
</script>
<template>
  <button
    :class="`${baseClass} ${buttonSizes[size]} ${buttonVariants[variant][color]}`"
  >
    <slot />
  </button>
</template>
