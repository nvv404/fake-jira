import { FC } from "react"
import useAppSelector from "presentation/hook/useAppSelector"
import Column from "./Column"
import { Wrapper } from "./styles"

const TaskControlBlock: FC = () => {
  const { data } = useAppSelector(({ tasksBoard }) => tasksBoard)

  return (
    <Wrapper>
      {data.map((item) => (
        <Column key={item.id} data={item} />
      ))}
    </Wrapper>
  )
}
export default TaskControlBlock
