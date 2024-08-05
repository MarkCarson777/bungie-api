import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Root } from "./routes/root.tsx";
import { Data } from "./routes/data.tsx";
import { Character, loader as characterLoader } from "./routes/character.tsx";

import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
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
