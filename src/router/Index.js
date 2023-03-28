import { createBrowserRouter } from "react-router-dom"
import Home from "views/Home"
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
    ],
  },
])

export default router
