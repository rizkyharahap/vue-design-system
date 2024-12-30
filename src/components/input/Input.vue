<script setup lang="ts">
import { inputClass, type InputProps, inputSizes, inputVariants } from ".";

withDefaults(defineProps<InputProps>(), {
  variant: "default",
  size: "normal",
});
</script>

<template>
  <input
    type="text"
    id="large-input"
    :class="`${inputClass} ${inputSizes[size]} ${inputVariants[variant]}`"
  />
</template>
