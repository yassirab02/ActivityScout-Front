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
import SignIn from "./pages/SignIn";
import About from "./components/About";
import SignHome from "./pages/SignHome";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
    errorElement: <ErrorPage/>,
  },
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
      {
        path: "/about",
        element: <About />,
      },
    ],
    
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/signhome",
    element: <SignHome />,
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