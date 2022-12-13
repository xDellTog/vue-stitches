<script setup lang="ts">
import Styled from "./Styled.vue";

type ButtonColor = "light" | "primary";

const { color = "light" } = defineProps<{
  color?: ButtonColor;
}>();

const style = {
  border: 0,
  borderRadius: 8,
  p: "$1",

  defaultVariants: {
    color: "light",
  },
  variants: {
    color: {
      light: {
        background: "$light",
        color: "$lightContrast",
        "&:hover": {
          background: "$lightTint",
        },
        "&:focus": {
          background: "$lightShade",
        },
      },
      primary: {
        background: "$primary",
        color: "$primaryContrast",
        "&:hover": {
          background: "$primaryTint",
        },
        "&:focus": {
          background: "$primaryShade",
        },
      },
    },
  },
};
</script>

<template>
  <Styled as="button" :css="style" :variants="{ color }">
    <slot />
  </Styled>
</template>
