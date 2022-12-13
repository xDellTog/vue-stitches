import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

export enum AppTheme {
  LIGHT = "light",
  DARK = "dark",
}

export const useThemeStore = defineStore("theme", () => {
  const theme = ref<AppTheme>(AppTheme.LIGHT);

  onMounted(() => {
    document.body.classList.value = theme.value;
  });

  watch(theme, () => {
    document.body.classList.value = theme.value;
  });

  const toggleTheme = () => {
    theme.value =
      theme.value === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;
  };

  const setTheme = (newTheme: AppTheme) => {
    theme.value = newTheme;
  };

  return {
    theme,
    toggleTheme,
    setTheme,
  };
});
