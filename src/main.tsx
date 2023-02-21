import React from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "app/routes/app";
import Dashboard from "app/routes/dashboard/dashboard";
import Gym from "app/routes/gym/gym";
import Bookings from "app/routes/bookings/bookings";
import Training from "app/routes/training/training";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "gym",
        element: <Gym />,
      },
      {
        path: "bookings",
        element: <Bookings />,
      },
      {
        path: "training",
        element: <Training />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById("root")
);
