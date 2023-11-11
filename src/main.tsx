import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { Global } from "@emotion/react"
import { store } from "data/store"
import ThemeProvider from "presentation/context/ThemeProvider"
import ErrorBoundary from "presentation/context/ErrorBoundary"
import App from "presentation/App"
import globalStyles from "./globalStyles"

const root = ReactDOM.createRoot(document.getElementById("root")!)

root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ThemeProvider>
          <Global styles={globalStyles} />
          <App />
        </ThemeProvider>
      </Provider>
    </ErrorBoundary>
  </React.StrictMode>,
)
