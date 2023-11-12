import styled from "@emotion/styled"
import BaseText from "presentation/component/common/typography/Text"

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.mainDark};
  border-radius: 4px;
  padding: 15px 10px;
`

export const Text = styled(BaseText)().withComponent("p")

export const List = styled.ul`
  display: grid;
  row-gap: 8px;
  margin-top: 10px;
`
