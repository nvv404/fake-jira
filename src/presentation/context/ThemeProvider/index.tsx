import { FC, PropsWithChildren } from "react"
import { ThemeProvider as EmotionThemeProvider } from "@emotion/react"
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles"
import { enUS } from "@mui/x-date-pickers/locales"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs"
import { LocalizationProvider } from "@mui/x-date-pickers"
import theme from "./theme"

const baseMUITheme = createTheme(
  {
    components: {
      MuiSvgIcon: {
        defaultProps: {
          htmlColor: theme.colors.textDark,
          lightingColor: theme.colors.textMain,
        },
      },
    },
    palette: {
      primary: {
        main: theme.colors.primaryMain,
      },
      secondary: {
        main: theme.colors.primaryDark,
      },
      background: {
        default: theme.colors.background,
        paper: theme.colors.primaryDark,
      },
      text: {
        primary: theme.colors.textMain,
        secondary: theme.colors.textDark,
      },
    },
  },
  enUS,
)

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <MUIThemeProvider theme={baseMUITheme}>
        <EmotionThemeProvider theme={theme}>{children}</EmotionThemeProvider>
      </MUIThemeProvider>
    </LocalizationProvider>
  )
}

export default ThemeProvider
