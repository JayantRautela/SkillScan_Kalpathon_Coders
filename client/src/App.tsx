import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Index from "./components/index";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
  }
])

function App() {


  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App
