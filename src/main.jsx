import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import Errorboundary from "./Components/Errorboundary.Jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Errorboundary fallback = "Sonething went wrong">
        <App />
      </Errorboundary>
    </BrowserRouter>
  </StrictMode>,
);
