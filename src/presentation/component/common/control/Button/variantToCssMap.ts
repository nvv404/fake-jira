import { css, SerializedStyles } from "@emotion/react"
import rgba from "polished/lib/color/rgba"
import { ThemeT } from "presentation/context/ThemeProvider/theme/types"
import type { VariantT } from "./styles"

const outlinedCss = (theme: ThemeT) => css`
  background-color: transparent;
  border-color: ${theme.colors.primaryMain};
  color: ${theme.colors.textMain};

  &:hover {
    background-color: ${rgba(theme.colors.primaryMain, 0.8)};
  }

  &:active,
  &:focus-visible {
    background-color: ${rgba(theme.colors.primaryMain, 0.7)};
  }
`

const primaryCss = (theme: ThemeT) => css`
  background: ${theme.colors.primaryMain};
  color: ${theme.colors.textMain};

  &:hover {
    background-color: ${rgba(theme.colors.primaryMain, 0.8)};
  }

  &:active,
  &:focus-visible {
    background-color: ${rgba(theme.colors.primaryMain, 0.7)};
  }
`

const nakedCss = (theme: ThemeT) => css`
  background: transparent;
  color: ${theme.colors.primaryMain};

  &:hover {
    background-color: ${rgba(theme.colors.primaryMain, 0.14)};
  }

  &:active,
  &:focus-visible {
    background-color: ${rgba(theme.colors.primaryMain, 0.3)};
  }
`

const VARIANT_TO_CSS_MAP: Record<
  VariantT,
  (theme: ThemeT) => SerializedStyles
> = {
  primary: primaryCss,
  naked: nakedCss,
  outlined: outlinedCss,
}

export default VARIANT_TO_CSS_MAP
