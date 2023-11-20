import { FC, MouseEventHandler } from "react"
import useAppSelector from "presentation/hook/useAppSelector"
import { Wrapper, Button } from "./styles"

type PropsT = {
  onSubmit: MouseEventHandler<HTMLButtonElement>
  onReset: MouseEventHandler<HTMLButtonElement>
  isResetButtonDisabled: boolean
}

const Buttons: FC<PropsT> = (props) => {
  const { onReset, onSubmit, isResetButtonDisabled } = props
  const { isLoading } = useAppSelector(({ tasksBoard }) => tasksBoard)

  return (
    <Wrapper>
      <Button disabled={isLoading} onClick={onSubmit}>
        Search
      </Button>
      <Button
        disabled={isResetButtonDisabled || isLoading}
        variant="outlined"
        onClick={onReset}
      >
        Reset
      </Button>
    </Wrapper>
  )
}

export default Buttons
