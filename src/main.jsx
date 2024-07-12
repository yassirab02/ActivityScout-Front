import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import ErrorPage from "./components/ErrorPage";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Activities from "./components/Activities";
import Layout from "./components/Layout";
import AddActivity from "./components/AddActivity";

const router = createBrowserRouter([
  {
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: "/contact",
        element: <Activities />,
      },
      {
        path: "/add",
        element: <AddActivity />,
      },
    ],
    
  },
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>,
  },
  {
    path: "/home",
    element: <Home/>,
    errorElement: <ErrorPage/>,
  },
 
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);