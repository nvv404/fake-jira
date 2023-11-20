import styled from "@emotion/styled"
import BaseDatePicker from "presentation/component/common/control/DatePicker"
import { mq } from "presentation/mediaquery"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  &:first-of-type {
    margin-right: 10px;
  }

  ${mq.lowerSm} {
    &:first-of-type {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`

export const DatePicker = styled(BaseDatePicker)`
  margin-top: 10px;
`
