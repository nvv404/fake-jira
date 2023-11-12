import styled from "@emotion/styled"
import BaseText from "presentation/component/common/typography/Text"

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
`

export const Title = styled(BaseText)().withComponent("h1")
