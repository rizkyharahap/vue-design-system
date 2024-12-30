<script setup lang="ts">
import { baseClass, type InputProps, inputSizes, inputVariants } from ".";

withDefaults(defineProps<InputProps>(), {
  variant: "default",
  size: "normal",
});
</script>

<template>
  <input
    type="text"
    id="large-input"
    :class="` ${inputSizes[size]} ${inputVariants[variant]} ${baseClass}`"
  />
</template>
