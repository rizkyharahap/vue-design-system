<script setup lang="ts">
import { baseClass, type InputPropsProps, inputSizes, inputVariants } from ".";

withDefaults(defineProps<InputPropsProps>(), {
  variant: "default",
  size: "normal",
  color: "blue",
});
</script>
<template>
  <input
    :class="`${baseClass} ${inputSizes[size]} ${inputVariants[variant][color]}`"
  />
</template>
