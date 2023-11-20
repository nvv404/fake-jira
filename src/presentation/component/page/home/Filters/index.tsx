import { FC, MouseEventHandler, useState } from "react"
import { fetchTaskBoards } from "data/store/tasksBoardReducer/api/actions"
import { ValueT as DatePickerValueT } from "presentation/component/common/control/DatePicker"
import useAppSelector from "presentation/hook/useAppSelector"
import useAppDispatch from "presentation/hook/useAppDispatch"
import DatePickerWithTitle from "./DatePickerWithTitle"
import { Wrapper, Button } from "./styles"

type StateT = {
  startDate: DatePickerValueT
  endDate: DatePickerValueT
}

const Filters: FC = () => {
  const { isLoading } = useAppSelector(({ tasksBoard }) => tasksBoard)
  const dispatch = useAppDispatch()
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

  const handleButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(
      fetchTaskBoards({
        endDate: dateState.endDate,
        startDate: dateState.startDate,
      }),
    )
  }

  return (
    <Wrapper>
      <DatePickerWithTitle
        disabled={isLoading}
        value={dateState.startDate}
        onChange={handleStartDatePickerChange}
        title="From"
      />
      <DatePickerWithTitle
        disabled={isLoading}
        value={dateState.endDate}
        onChange={handleEndDatePickerChange}
        title="To"
      />
      <Button disabled={isLoading} onClick={handleButtonClick}>
        Search
      </Button>
    </Wrapper>
  )
}

export default Filters
