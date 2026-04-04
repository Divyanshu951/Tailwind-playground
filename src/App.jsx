import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";


const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <AppLayout />
      }
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
