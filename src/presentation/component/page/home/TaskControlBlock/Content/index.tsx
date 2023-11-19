import { FC } from "react"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import useAppSelector from "presentation/hook/useAppSelector"
import DroppableColumn from "./DroppableColumn"
import { Wrapper, Progress } from "./styles"

type PropsT = {
  items: TaskBoard[]
}

const Content: FC<PropsT> = (props) => {
  const { items } = props
  const { isLoading } = useAppSelector(({ tasksBoard }) => tasksBoard)

  return (
    <Wrapper>
      {!isLoading &&
        items.map((board) => <DroppableColumn data={board} key={board.type} />)}
      {isLoading && <Progress size={50} />}
    </Wrapper>
  )
}

export default Content
