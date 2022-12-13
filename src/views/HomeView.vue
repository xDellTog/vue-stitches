<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useThemeStore } from "@/stores/theme";
import Button from "@/components/Button.vue";
import Styled from "@/components/Styled.vue";

const store = useCounterStore();
const themeStore = useThemeStore();
</script>

<template>
  <main>
    <h1>Home page</h1>

    <h3>count: {{ store.count }}</h3>

    <h3>doubleCount: {{ store.doubleCount }}</h3>

    <Styled as="div" :css="{ display: 'flex', g: '$1' }">
      <Button @click="store.increment"> Increment </Button>

      <Button @click="themeStore.toggleTheme" color="primary">
        Toggle Theme
      </Button>
    </Styled>
  </main>
</template>
