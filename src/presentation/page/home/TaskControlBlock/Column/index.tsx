import { FC } from "react"
import { v4 } from "uuid"
import TasksBoard from "domain/entity/TasksBoard/TasksBoard"
import Item from "./Item"
import { List, Text, Wrapper } from "./styles"

type PropsT = {
  currentBoard: TasksBoard
}

const Column: FC<PropsT> = (props) => {
  const { currentBoard } = props
  const { items, title } = currentBoard

  return (
    <Wrapper>
      <Text>{title}</Text>
      <List>
        {items.map((item, index) => (
          <Item key={index} currentBoard={currentBoard} currentTask={item} />
        ))}
      </List>
    </Wrapper>
  )
}

export default Column
