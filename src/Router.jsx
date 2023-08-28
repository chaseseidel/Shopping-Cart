import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./assets/reset.css";
import "./assets/styles.css";
import App from "./App";
import Home from "./pages/Home/Home";
import ErrorPage from "./pages/ErrorPage";
import MensPage from "./pages/Pages/MensPage";
import WomensPage from "./pages/Pages/WomensPage";
import ElectronicsPage from "./pages/Pages/ElectronicsPage";
import JewelryPage from "./pages/Pages/JewelryPage";

function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      children: [
        { index: true, element: <Home /> },
        { path: "/men", element: <MensPage /> },
        { path: "/women", element: <WomensPage /> },
        { path: "/jewelry", element: <JewelryPage /> },
        { path: "/electronics", element: <ElectronicsPage /> },
      ],
      errorElement: <ErrorPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
