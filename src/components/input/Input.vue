<script setup lang="ts">
import { baseClass, type InputPropsProps, inputSizes, inputVariants } from ".";

withDefaults(defineProps<InputPropsProps>(), {
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
