import { FC, useState } from "react"
import DatePicker, {
  ValueT as DatePickerValueT,
} from "presentation/component/common/control/DatePicker"
import { Wrapper, Button } from "./styles"

type StateT = {
  startDate: DatePickerValueT
  endDate: DatePickerValueT
}

const Filters: FC = () => {
  const [dateState, setDateState] = useState<StateT>({
    endDate: null,
    startDate: null,
  })

  const handleStartDatePickerChange = (startDate: DatePickerValueT): void => {
    setDateState((value) => ({ ...value, startDate }))
  }

  const handleEndDatePickerChange = (endDate: DatePickerValueT): void => {
    setDateState((value) => ({ ...value, endDate }))
  }

  return (
    <Wrapper>
      <DatePicker
        value={dateState.startDate}
        onChange={handleStartDatePickerChange}
      />
      <DatePicker
        value={dateState.endDate}
        onChange={handleEndDatePickerChange}
      />
      <Button>Найти</Button>
    </Wrapper>
  )
}

export default Filters
