/* eslint-disable no-dupe-keys */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpecificCategory from './Components/SpecificCategory';
import Layout from "./Components/Layout";
import GameDetails from './Components/GameDetails';

const router = createBrowserRouter([{
  path: "/", element: <Layout/> ,children: [{
    path: "/" , index: true ,element: <SpecificCategory/>,
    path: "GameDetails" , element: <GameDetails/>,
  }]
  }])

export default function App() {
  return  <>
    <RouterProvider router={router}/>  
  </>
}

