<script setup lang="ts">
import {
  descriptionLabelClass,
  type DescriptionLabelProps,
  labelVariants,
} from ".";

withDefaults(defineProps<DescriptionLabelProps>(), {
  variant: "default",
});
</script>

<template>
  <p :class="`${descriptionLabelClass} ${labelVariants[variant]}`">
    <slot />
  </p>
</template>
