import React from "react"
import ReactDOM from "react-dom"

//* Import styles
import { Global } from "./config/globalStyles"
import { ThemeProvider } from "styled-components"
import { theme } from "./config/theme"

//* Import components
import App from "./App"

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
)
