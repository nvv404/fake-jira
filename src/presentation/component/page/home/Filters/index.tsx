import { FC, MouseEventHandler, useState } from "react"
import { ValueT as DatePickerValueT } from "presentation/component/common/control/DatePicker"
import useAppSelector from "presentation/hook/useAppSelector"
import { Wrapper, Button, DatePicker } from "./styles"
import useAppDispatch from "presentation/hook/useAppDispatch"
import { fetchTaskBoards } from "data/store/tasksBoardReducer/api/actions"

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
      <DatePicker
        disabled={isLoading}
        value={dateState.startDate}
        onChange={handleStartDatePickerChange}
      />
      <DatePicker
        disabled={isLoading}
        value={dateState.endDate}
        onChange={handleEndDatePickerChange}
      />
      <Button disabled={isLoading} onClick={handleButtonClick}>
        Найти
      </Button>
    </Wrapper>
  )
}

export default Filters
