<script setup lang="ts">
import { labelClass, type LabelProps, labelVariants } from ".";

withDefaults(defineProps<LabelProps>(), {
  variant: "default",
});
</script>

<template>
  <label :class="`${labelClass} ${labelVariants[variant]}`">
    <slot />
  </label>
</template>
