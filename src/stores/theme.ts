import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

import "@/assets/normalize.css";

import { globalStyles, darkTheme, lightTheme } from "@/theme/stitches.config";

export const useThemeStore = defineStore("theme", () => {
  const theme = ref(lightTheme);

  onMounted(() => {
    globalStyles();
    
    document.body.classList.value = theme.value;
  });

  watch(theme, () => {
    document.body.classList.value = theme.value;
  });

  const toggleTheme = () => {
    theme.value =
      theme.value.selector === lightTheme.selector ? darkTheme : lightTheme;
  };

  const setTheme = (newTheme: any) => {
    theme.value = newTheme;
  };

  return {
    theme,
    toggleTheme,
    setTheme,
  };
});
