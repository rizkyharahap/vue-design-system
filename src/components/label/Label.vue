<script setup lang="ts">
import { baseClass, type LabelProps, labelVariants } from ".";

withDefaults(defineProps<LabelProps>(), {
  variant: "default",
});
</script>

<template>
  <label :class="`${baseClass} ${labelVariants[variant]}`">
    <slot />
  </label>
</template>
