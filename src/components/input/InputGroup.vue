<script setup lang="ts">
import { type InputProps } from ".";

withDefaults(defineProps<InputProps>(), {
  variant: "default",
  size: "normal",
});
</script>

<template>
  <div class="relative">
    <div
      v-if="$slots.leftIcon"
      class="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3.5"
    >
      <slot name="leftIcon" />
    </div>

    <slot />

    <div
      v-if="$slots.rightIcon"
      class="pointer-events-none absolute inset-y-0 end-0 flex items-center pe-3.5"
    >
      <slot name="rightIcon" />
    </div>
  </div>
</template>
