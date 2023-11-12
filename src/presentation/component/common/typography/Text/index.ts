import styled from "@emotion/styled"
import {
  ColorKeyT,
  FontWeightKeyT,
} from "presentation/context/ThemeProvider/theme/types"

export type PropsT = {
  color?: ColorKeyT
  size?: number
  weight?: FontWeightKeyT
}

const Text = styled.span<PropsT>`
  color: ${({ theme, color }) => (color ? theme.colors[color] : "inherit")};
  font-size: ${({ size }) => (size ? `${size}px` : "inherit")};
  font-weight: ${({ theme, weight }) =>
    weight ? theme.font.weight[weight] : "inherit"};
`

export default Text
