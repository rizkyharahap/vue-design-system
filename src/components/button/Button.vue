<script setup lang="ts">
import {
  baseClass,
  type ButtonPropsProps,
  buttonSizes,
  buttonVariants,
} from ".";

withDefaults(defineProps<ButtonPropsProps>(), {
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
