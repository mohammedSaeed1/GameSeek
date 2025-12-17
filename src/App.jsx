import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SpecificCategory from './Components/SpecificCategory';

const router = createBrowserRouter([{
  path: "/" , index: true, element: <SpecificCategory/>
}])

export default function App() {
  return  <>
    <RouterProvider router={router}/>  
  </>
}

