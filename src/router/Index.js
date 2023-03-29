import { createBrowserRouter } from "react-router-dom"
import Home from "views/Home"
import Portofolio from "views/Portofolio"
import LayoutHome from "views/layouts/LayoutHome"
import ErrorPage from "views/ErrorPage"

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage />,
    element: <LayoutHome />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "portofolio",
        element: <Portofolio />,
      },
    ],
  },
])

export default router
