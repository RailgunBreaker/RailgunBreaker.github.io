import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { LanguageSelector } from "./components/ui/LanguageSelector";
import { ThemeSelector } from "./components/ui/ThemeSelector";
import { initializeTheme } from "./hooks/stores/useTheme";
import { useContent } from "./hooks/useContent";
import "./styles/index.css";

initializeTheme();

export function App() {
  const content = useContent([{ contentKey: "hello", sectionName: "content" }]);

  return (
    <div className="bg-background text-foreground min-h-screen p-6">
      <h1 className="font-bold">{content.hello}</h1>
      <div className="mt-4 flex flex-wrap items-center gap-2">
        <ThemeSelector />
        <LanguageSelector />
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
