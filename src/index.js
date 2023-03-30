import React from "react"
import ReactDOM from "react-dom/client"
import "./assets/css/tailwind.css"
import "./index.css"
import reportWebVitals from "./reportWebVitals"
import { ChakraProvider } from "@chakra-ui/react"
import { RouterProvider } from "react-router-dom"
import router from "router/Index"
// fonts
import "./assets/fonts/LilitaOne-Regular.ttf"
import "./assets/fonts/Montserrat-ExtraBold.ttf"
import "./assets/fonts/Montserrat-SemiBold.ttf"
import "./assets/fonts/Montserrat-Medium.ttf"
// break points
import ReactBreakpoints from "react-breakpoints"


const breakpoints = {
  mobile: 320,
  mobileLandscape: 480,
  tablet: 768,
  tabletLandscape: 1024,
  desktop: 1200,
  desktopLarge: 1500,
  desktopWide: 1920,
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <ReactBreakpoints breakpoints={breakpoints}>
        <RouterProvider router={router} />
      </ReactBreakpoints>
    </ChakraProvider>
  </React.StrictMode>
)
reportWebVitals()
