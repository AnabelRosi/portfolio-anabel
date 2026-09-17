// theme/baseTheme.js
import { createTheme } from "@mui/material/styles";

export const baseThemeOptions = {
  typography: {
    fontFamily: "'Inter', Roboto, Arial, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 800 },
    h3: { fontWeight: 700 },
    button: { textTransform: "none", fontWeight: 600 },
  },

  shape: { borderRadius: 12 },

  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: { borderRadius: 16 },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          // opcional: padding lateral consistente
        },
      },
    },
  },
};

export function buildTheme(palette, extra = {}) {
  return createTheme({
    ...baseThemeOptions,
    palette,
    ...extra,
  });
}