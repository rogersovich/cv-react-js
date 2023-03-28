import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/css/tailwind.css"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import router from "router/Index"
// fonts
import './assets/fonts/LilitaOne-Regular.ttf'
import './assets/fonts/Montserrat-ExtraBold.ttf'
import './assets/fonts/Montserrat-SemiBold.ttf'
import './assets/fonts/Montserrat-Medium.ttf'

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
)
reportWebVitals()
