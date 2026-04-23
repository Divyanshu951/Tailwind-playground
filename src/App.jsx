import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";
import AppLayoutFinta from "./projects/Finto landing page/AppLayoutFinta";
import AppLayoutCobalt from "./projects/cobalt Landing page/AppLayoutCobalt";
import AppLayoutKeyboard from "./projects/Keyboard by aceternity/AppLayoutKeyboard";
import AppLayoutResponsive from "./projects/responsive/AppLayoutResponsive";
import AppLayoutDarkTheme from "./projects/implementing dark theme/AppLayoutDarkTheme";
import AppLayoutGrid from "./projects/grid/AppLayoutGrid";
import AppLayoutMasking from "./projects/masking/AppLayoutMasking";
import AppLayoutHF from "./projects/hoverFocusAndOtherState/AppLayoutHF";
import AppLayoutSvg from "./projects/svgs/AppLayoutSvg";

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
  {
    path: "/dark-theme",
    element: <AppLayoutDarkTheme />,
    errorElement: <Error />,
  },
  {
    path: "/grid",
    element: <AppLayoutGrid />,
    errorElement: <Error />,
  },
  {
    path: "/masking",
    element: <AppLayoutMasking />,
    errorElement: <Error />,
  },
  {
    path: "/hover-focus-n-other-state",
    element: <AppLayoutHF />,
    errorElement: <Error />,
  },
  {
    path: "/svg",
    element: <AppLayoutSvg />,
    errorElement: <Error />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
