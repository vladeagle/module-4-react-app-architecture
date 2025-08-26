import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./main.css";
import App from "./App.jsx";
import "@mantine/core/styles.css";
import { BrowserRouter } from "react-router-dom";
import { MantineProvider } from "@mantine/core";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <MantineProvider>
        <App />
      </MantineProvider>
    </BrowserRouter>
  </StrictMode>
);
