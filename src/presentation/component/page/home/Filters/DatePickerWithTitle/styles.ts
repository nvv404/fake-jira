import styled from "@emotion/styled"
import BaseDatePicker from "presentation/component/common/control/DatePicker"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`

export const DatePicker = styled(BaseDatePicker)`
  margin-top: 10px;

  &:first-of-type {
    margin-right: 10px;
  }
`
