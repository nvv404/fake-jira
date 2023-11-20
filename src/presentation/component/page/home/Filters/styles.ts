import styled from "@emotion/styled"
import { mq } from "presentation/mediaquery"

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;

  ${mq.lowerSm} {
    flex-direction: column;
    width: 60%;
  }

  ${mq.lowerSx} {
    width: auto;
  }
`
