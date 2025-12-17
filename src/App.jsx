/* eslint-disable no-dupe-keys */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpecificCategory from "./Components/SpecificCategory";
import Layout from "./Components/Layout";
import GameDetails from "./Components/GameDetails";
import { SpeedInsights } from '@vercel/speed-insights/react';

const router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { path: "/", index: true, element: <SpecificCategory /> },
      { path: "/:category", element: <SpecificCategory /> },
    ],
  },
  { path: "GameDetails/:id", element: <GameDetails /> },
]);

export default function App() {
  return (
    <>
     <SpeedInsights/>
      <RouterProvider router={router} />
    </>
  );
}
