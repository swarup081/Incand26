import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Footer } from "./screens/Footer";

createRoot(document.getElementById("app") as HTMLElement).render(
  <StrictMode>
    <Footer />
  </StrictMode>,
);
