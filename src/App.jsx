import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import HomePage from "./pages/HomePage";
import PlacesPage from "./pages/PlacesPage";
import ExperiencePage from "./pages/ExperiencePage";
import AboutPage from "./pages/AboutPage";

import Layout from "./Layout/Layout";
import ShopPage from "./pages/ShopPage";
import TourPage from "./pages/TourPage";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "places",
          element: <PlacesPage />,
        },
        {
          path: "experiences",
          element: <ExperiencePage />,
        },
        {
          path: "about",
          element: <AboutPage />,
        },
        {
          path: "shop",
          element: <ShopPage />,
        },
        {
          path: "tours",
          element: <TourPage />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
