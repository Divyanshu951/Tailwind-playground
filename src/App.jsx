import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import AppLayoutFinta from "./projects/Finto landing page/AppLayoutFinta";
import AppLayoutCobalt from "./projects/cobalt Landing page/AppLayoutCobalt";
import AppLayoutKeyboard from "./projects/Keyboard by aceternity/AppLayoutKeyboard";
import AppLayoutResponsive from "./projects/responsive/AppLayoutResponsive";

const router = createBrowserRouter([
  { path: "/", element: <AppLayout />, errorElement: <Error /> },
  {
    path: "/finta",
    element: <AppLayoutFinta />,
    errorElement: <Error />,
  },
  {
    path: "/cobalt",
    element: <AppLayoutCobalt />,
    errorElement: <Error />,
  },
  {
    path: "/keyboard",
    element: <AppLayoutKeyboard />,
    errorElement: <Error />,
  },
  {
    path: "/responsive",
    element: <AppLayoutResponsive />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
