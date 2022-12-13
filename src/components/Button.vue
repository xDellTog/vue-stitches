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
@import "../assets/space.scss";
@import "../assets/colors.scss";
@import "../assets/rii.scss";

button {
  color: #fff;
  border: 0;
  border-radius: $borderRadiusDefault;
  padding: $space1;

  // .light & {
  //   .primary {
  //     background: $colorPrimary;
  //     &:hover {
  //       background: $colorPrimaryTint;
  //     }
  //     &:focus {
  //       background: $colorPrimaryShade;
  //     }
  //   }
  // }

  // .dark & {
  //   background: $colorPrimary;
  //   &:hover {
  //     background: $colorPrimaryTint;
  //   }
  //   &:focus {
  //     background: $colorPrimaryShade;
  //   }
  // }
}
</style>
