import { FC } from "react"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import DroppableColumn from "./DroppableColumn"
import { Wrapper } from "./styles"

type PropsT = {
  items: TaskBoard[]
}

const Content: FC<PropsT> = (props) => {
  const { items } = props

  return (
    <Wrapper>
      {items.map((board) => (
        <DroppableColumn data={board} key={board.type} />
      ))}
    </Wrapper>
  )
}

export default Content
