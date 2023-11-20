import styled from "@emotion/styled"
import { ReactComponent as BaseBatsIcon } from "presentation/asset/svg/bats.svg"
import { mq } from "presentation/mediaquery"

export const BatsIcon = styled(BaseBatsIcon)`
  width: 80px;
  height: 80px;
  margin-left: auto;
`

export const Wrapper = styled.footer`
  display: flex;
  align-items: center;
  padding: 30px 0;
  margin-top: auto;

  ${mq.lowerSm} {
    padding: 20px 0;
  }
`
