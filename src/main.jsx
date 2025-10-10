import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./style.css"; // ← Asegúrate de que esta línea existe
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")).render(<App />);
