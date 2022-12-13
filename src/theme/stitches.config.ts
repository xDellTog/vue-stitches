import { createStitches } from "@stitches/core";

const { createTheme, css, globalCss } = createStitches({
  media: {
    sm: "(min-width: 640px)",
    md: "(min-width: 768px)",
    lg: "(min-width: 1024px)",
  },
  utils: {
    p: (value: string) => ({
      padding: value,
    }),
    m: (value: string) => ({
      margin: value,
    }),
    g: (value: string) => ({
      gap: value,
    }),
  },
  theme: {
    space: {
      1: "5px",
      2: "10px",
      3: "15px",
      4: "20px",
      5: "25px",
    },
    fonts: {
      default:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      mono: "monospace",
    },
  },
});

const globalStyles = globalCss({
  body: {
    fontFamily: "$default",
    background: "$background",
    color: "$text",
  },
});

const lightTheme = createTheme("light", {
  colors: {
    primary: "#ffaa00",
    primaryTint: "#ffcc00",
    primaryShade: "#ffee00",
    primaryContrast: "#fff",

    light: "#fff",
    lightTint: "#eee",
    lightShade: "#ddd",
    lightContrast: "#000",

    background: "#fff",
    text: "#000",
  },
});

const darkTheme = createTheme("dark", {
  colors: {
    primary: "#ffaa00",
    primaryTint: "#ffcc00",
    primaryShade: "#ffee00",
    primaryContrast: "#fff",

    light: "#fff",
    lightTint: "#eee",
    lightShade: "#ddd",
    lightContrast: "#000",

    background: "#000",
    text: "#fff",
  },
});

export { css, lightTheme, darkTheme, globalStyles };
