import { FC } from "react"
import TaskGroup from "domain/entity/TaskGroup/TaskGroup"
import Item from "./Item"
import { Wrapper, List, Text } from "./styles"

type PropsT = {
  data: TaskGroup
}

const Column: FC<PropsT> = (props) => {
  const { data } = props
  const { items, title } = data

  return (
    <Wrapper>
      <Text>{title}</Text>
      <List>
        {items.map((item) => (
          <Item key={item.id} data={item} />
        ))}
      </List>
    </Wrapper>
  )
}

export default Column
