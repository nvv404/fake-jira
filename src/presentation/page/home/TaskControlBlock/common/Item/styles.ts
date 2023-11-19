import lighten from "polished/lib/color/lighten"
import styled from "@emotion/styled"

type WrapperPropsT = {
  isWithOpacity?: boolean
  isGrabbing?: boolean
}

export const Wrapper = styled.li<WrapperPropsT>`
  display: flex;
  opacity: ${({ isWithOpacity }) => (isWithOpacity ? "0.5" : "1")};
  transform-origin: 50% 50%;
  height: 100px;
  border-radius: 2px;
  cursor: ${({ isGrabbing }) => (isGrabbing ? "grabbing" : "grab")};
  background-color: ${({ theme, isGrabbing }) =>
    isGrabbing
      ? lighten(0.08, theme.colors.primaryMain)
      : theme.colors.primaryMain};
  font-size: 12px;
  box-shadow: ${({ isGrabbing, theme }) =>
    isGrabbing
      ? `0px 2px 0px 2px ${theme.colors.primaryDark}`
      : `0px 0px 0px 1px ${theme.colors.primaryDark}`};
  transform: ${({ isGrabbing }) => (isGrabbing ? "scale(1.05)" : "scale(1)")};
  padding: 10px;

  &:hover {
    background-color: ${({ theme }) => lighten(0.04, theme.colors.primaryMain)};
  }
`
