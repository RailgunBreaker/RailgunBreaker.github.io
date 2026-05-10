import { Button } from "@heroui/react/button";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { useContent } from "./hooks/useContent";
import "./styles/index.css";

export function App() {
  const content = useContent([
    { contentKey: "hello", sectionName: "content", languageCode: "en" },
  ]);

  return (
    <div>
      <h1 className="font-bold">{content.hello}</h1>
      <Button>{content.hello}</Button>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
