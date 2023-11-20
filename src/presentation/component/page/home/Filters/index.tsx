import { FC, MouseEventHandler, useState } from "react"
import { fetchTaskBoards } from "data/store/tasksBoardReducer/api/actions"
import { ValueT as DatePickerValueT } from "presentation/component/common/control/DatePicker"
import useAppSelector from "presentation/hook/useAppSelector"
import useAppDispatch from "presentation/hook/useAppDispatch"
import DatePickerWithTitle from "./DatePickerWithTitle"
import Buttons from "./Buttons"
import { Wrapper } from "./styles"

type StateT = {
  startDate: DatePickerValueT
  endDate: DatePickerValueT
}

const STATE_INITIAL_VALUE: StateT = {
  endDate: null,
  startDate: null,
}

const Filters: FC = () => {
  const { isLoading } = useAppSelector(({ tasksBoard }) => tasksBoard)
  const dispatch = useAppDispatch()
  const [dateState, setDateState] = useState<StateT>(STATE_INITIAL_VALUE)

  const handleStartDatePickerChange = (startDate: DatePickerValueT): void => {
    setDateState((value) => ({ ...value, startDate }))
  }

  const handleEndDatePickerChange = (endDate: DatePickerValueT): void => {
    setDateState((value) => ({ ...value, endDate }))
  }

  const handleSubmitButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    dispatch(
      fetchTaskBoards({
        endDate: dateState.endDate,
        startDate: dateState.startDate,
      }),
    )
  }

  const handleResetButtonClick: MouseEventHandler<HTMLButtonElement> = () => {
    setDateState(STATE_INITIAL_VALUE)
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
      <Buttons
        onReset={handleResetButtonClick}
        onSubmit={handleSubmitButtonClick}
        isResetButtonDisabled={!dateState.endDate && !dateState.startDate}
      />
    </Wrapper>
  )
}

export default Filters
