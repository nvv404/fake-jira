import { FC } from "react"
import { StyledDatePicker } from "./styles"
import { useTheme } from "@emotion/react"

export type ValueT = string | null

export type PropsT = {
  value: ValueT
  onChange: (value: ValueT) => void
  disabled?: boolean
}

const DatePicker: FC<PropsT> = (props) => {
  const { disabled } = props
  const theme = useTheme()

  return (
    <StyledDatePicker emotionTheme={theme} isDisabled={disabled} {...props} />
  )
}

export default DatePicker
