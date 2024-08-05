import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// Route Pages
import { Root } from "./routes/root.tsx";
import { Data } from "./routes/data.tsx";
import { Character } from "./routes/character.tsx";
// Loaders
import { characterLoader } from "./loaders/characterLoader.tsx";
import { charactersLoader } from "./loaders/charactersLoader.tsx";
// Global Styles
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: charactersLoader,
  },
  {
    path: "/testData",
    element: <Data />,
  },
  {
    path: "/character/:characterId",
    element: <Character />,
    loader: characterLoader,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
