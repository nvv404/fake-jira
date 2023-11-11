type ColorsT = "black" | "white"

export type ColorT = Record<ColorsT, string>

export type FontWeightT = {
  regular: string
  semiBold: string
  bold: string
}

export type FontFamilyT = {
  arial: string
}

export type ThemeT = {
  colors: ColorT
  font: {
    weight: FontWeightT
    family: FontFamilyT
  }
  transition: {
    fast: string
    normal: string
    slow: string
  }
}

export type ColorKeyT = keyof ColorT

export type FontWeightKeyT = keyof FontWeightT
