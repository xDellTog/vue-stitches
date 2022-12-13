<script setup lang="ts">
import { css } from "@/theme/stitches.config";

const props = defineProps<{
  as?: any;
  variants?: any;
  css?: any;
}>();

const style = css({
  ...props.css,
});
</script>

<template>
  <props.as :class="style(props.variants).className">
    <slot />
  </props.as>
</template>
