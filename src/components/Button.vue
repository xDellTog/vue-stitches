<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  color: String,
});

const color = ref<string>(props.color || "light");
</script>

<template>
  <button class="bg-primary">
    <slot />
  </button>
</template>

<style scoped lang="scss">
@use "sass:map";
@import "../theme/variables.scss";

button {
  color: #fff;
  border: 0;
  border-radius: 5px;
  padding: 5px;
  width: 100%;

  .light & {
    color: map.get($colors, "primary-contrast");
    background: map.get($colors, "primary");
    &:hover {
      background: map.get($colors, "primary-tint");
    }
    &:focus {
      background: map.get($colors, "primary-shade");
    }
  }

  .dark & {
    color: map.get($colors, "primary-contrast");
    background: map.get($colors, "primary");
    &:hover {
      background: map.get($colors, "primary-tint");
    }
    &:focus {
      background: map.get($colors, "primary-shade");
    }
  }
}
</style>
