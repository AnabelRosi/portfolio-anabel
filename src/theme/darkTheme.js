import { buildTheme } from "./baseTheme";

const darkTheme = buildTheme({
  mode: "dark",
  primary: { main: "#64b5f6" },
  secondary: { main: "#b39ddb" },
  background: {
    default: "#0f172a",
    paper: "#1e293b",
  },
  text: {
    primary: "#f8fafc",
    secondary: "#cbd5e1",
  },
  divider: "#334155",
});

export default darkTheme;