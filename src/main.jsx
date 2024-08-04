import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { router } from "./router"
import { RouterProvider } from "react-router-dom";

//CSS
import "./config/style/modern-nomalizer.css";
import "./config/style/tailwind.css";
import "./config/style/main.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>,
);
