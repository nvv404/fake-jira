import styled from "@emotion/styled"
import BaseText from "presentation/component/common/typography/Text"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.primaryDark};
  padding: 10px;
`

export const Inner = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  row-gap: 10px;
  /*
    touch actions are needed to support dnd on mobile
  */
  touch-action: none;
`

export const Title = styled(BaseText)`
  color: ${({ theme }) => theme.colors.textDark};
  font-weight: ${({ theme }) => theme.font.weight.bold};

  &::first-letter {
    text-transform: uppercase;
  }
`
