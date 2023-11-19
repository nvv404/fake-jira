import styled from "@emotion/styled"
import BaseButton from "presentation/component/common/control/Button"
import BaseDatePicker from "presentation/component/common/control/DatePicker"

export const Wrapper = styled.div`
  display: flex;
  margin-top: 20px;
`

export const Button = styled(BaseButton)`
  margin-left: auto;
`

export const DatePicker = styled(BaseDatePicker)`
  &:first-child {
    margin-right: 10px;
  }
`
