import styled from "@emotion/styled"
import BaseText from "presentation/component/common/typography/Text"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

export const Title = styled(BaseText)`
  font-weight: ${({ theme }) => theme.font.weight.bold};
  font-size: 1.8rem;
`.withComponent("h1")
