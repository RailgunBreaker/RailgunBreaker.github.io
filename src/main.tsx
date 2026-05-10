import { Button } from "@heroui/react/button";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <div>
      <h1 className="font-bold">Hello</h1>
      <Button>Hello</Button>
    </div>
  </StrictMode>,
);
