/* eslint-disable no-dupe-keys */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpecificCategory from './Components/SpecificCategory';
import Layout from "./Components/Layout";
import GameDetails from './Components/GameDetails';
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient()

const router = createBrowserRouter([{
  path: "", element: <Layout/> ,children:[{
   path: "/" , index: true ,element: <SpecificCategory/>},
  {path: "GameDetails" , element: <GameDetails/>}]
  }])

export default function App() {
  return  <>
    
    <QueryClientProvider client={queryClient}>
    <RouterProvider router={router}/>  
    </QueryClientProvider>
  </>
}

