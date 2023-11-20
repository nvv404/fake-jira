import styled from "@emotion/styled"
import BaseButton from "presentation/component/common/control/Button"
import { mq } from "presentation/mediaquery"

export const Wrapper = styled.div`
  display: grid;
  row-gap: 8px;
  margin: auto 0 auto auto;
  width: 100px;

  ${mq.lowerSm} {
    width: 100%;
    margin: 10px auto 0;
  }
`

export const Button = styled(BaseButton)()
