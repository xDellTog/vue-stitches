<script setup lang="ts">
import { useCounterStore } from "@/stores/counter";
import { useThemeStore } from "@/stores/theme";
import Button from "@/components/Button.vue";

const store = useCounterStore();
const themeStore = useThemeStore();
</script>

<template>
  <main>
    <h1>Home page</h1>

    <h3>count: {{ store.count }}</h3>

    <h3>doubleCount: {{ store.doubleCount }}</h3>

    <Button @click="store.increment">increment</Button>

    <Button @click="themeStore.toggleTheme">Toggle Theme</Button>
  </main>
</template>
