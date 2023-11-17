import { ThemeT } from "./types"

const theme: ThemeT = {
  font: {
    weight: {
      regular: "400",
      semiBold: "600",
      bold: "700",
    },
    family: {
      arial: "Arial",
    },
  },
  transition: {
    fast: "200ms",
    normal: "400ms",
    slow: "700ms",
  },
  colors: {
    background: "#22092C",
    primaryDark: "#872341",
    primaryMain: "#BE3144",
    primaryLight: "#F05941",
    textMain: "#FCFBF4",
    textDark: "#e8e9ed",
  },
}

export default theme
