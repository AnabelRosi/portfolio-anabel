import { buildTheme } from "./baseTheme";

const theme = buildTheme({
  mode: "light",
  primary: { main: "#1976d2" },
  secondary: { main: "#7c4dff" },
  background: {
    default: "#f8fafc",
    paper: "#ffffff",
  },
  text: {
    primary: "#172033",
    secondary: "#64748b",
  },
  divider: "#e2e8f0",
});

export default theme;