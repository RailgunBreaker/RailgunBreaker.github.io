import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/layout/App";
import { initializeLanguage } from "./hooks/stores/useLanguage";
import { initializeTheme } from "./hooks/stores/useTheme";
import "./styles/index.css";

initializeLanguage();
initializeTheme();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
