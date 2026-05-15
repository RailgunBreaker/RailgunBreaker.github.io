import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./components/layout/App";
import { initializeLanguage } from "./hooks/stores/useLanguage";
import "./styles/index.css";

initializeLanguage();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
