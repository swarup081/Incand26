import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { AndroidCompact } from "./screens/AndroidCompact";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <AndroidCompact />
  </StrictMode>,
);
