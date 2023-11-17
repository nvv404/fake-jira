import { FC } from "react"
import { DatePicker as MuiDatePicker } from "@mui/x-date-pickers/DatePicker"

export type ValueT = string | null

type PropsT = {
  value: ValueT
  onChange: (value: ValueT) => void
}

const DatePicker: FC<PropsT> = (props) => {
  return <MuiDatePicker<ValueT> {...props} />
}

export default DatePicker
