import styled from "@emotion/styled"
import VARIANT_TO_CSS_MAP from "./variantToCssMap"

export type VariantT = "primary" | "naked"

export type PropsT = {
  variant: VariantT
}

export const BaseButton = styled.button<PropsT>`
  display: flex;
  align-items: center;
  outline: none;
  color: ${({ theme }) => theme.colors.textMain};
  font-size: 13px;
  padding: 10px 15px;
  border-radius: 4px;
  transition: background ${({ theme }) => theme.transition.fast};
  border: none;
  cursor: pointer;

  ${({ theme, variant }) => VARIANT_TO_CSS_MAP[variant](theme)};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.disabledMain};
    cursor: default;
    border-color: ${({ theme }) => theme.colors.disabledDark};
    color: ${({ theme }) => theme.colors.textDark};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primaryLight};
  }
`

export const StartAdornmentWrapper = styled.p`
  margin-right: 8px;
`
