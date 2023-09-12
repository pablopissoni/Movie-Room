import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";

//? RUTAS ----
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { Detail } from "./components/Detail.jsx";
import { ErrorPageNotFound } from "./components/ErrorPageNotFound";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     errorElement: <ErrorPageNotFound/>,
//   },
//   {
//     path: "/detail:id",
//     element: <Detail />,
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <BrowserRouter>
    <App />
    {/* <RouterProvider router={router} /> */}
  </BrowserRouter>
  // </React.StrictMode>
);
