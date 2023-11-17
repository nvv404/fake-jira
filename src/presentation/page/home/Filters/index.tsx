import { FC, useState } from "react"
import DatePicker, {
  ValueT as DatePickerValueT,
} from "presentation/component/common/control/DatePicker"
import { Wrapper } from "./styles"

const Filters: FC = () => {
  const [startDate, setStartDate] = useState<DatePickerValueT>(null)

  const handleDatePickerChange = (value: DatePickerValueT): void => {
    setStartDate(value)
  }

  return (
    <Wrapper>
      <DatePicker value={startDate} onChange={handleDatePickerChange} />
    </Wrapper>
  )
}

export default Filters
