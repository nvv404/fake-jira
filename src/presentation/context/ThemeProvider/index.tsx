import { FC, PropsWithChildren } from "react"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles"
import { ruRU } from "@mui/x-date-pickers/locales"
import theme from "./theme"

const baseMUITheme = createTheme({}, ruRU)

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <MUIThemeProvider theme={baseMUITheme}>
      <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
    </MUIThemeProvider>
  )
}

export default ThemeProvider
