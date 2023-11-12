import { FC } from "react"
import { Wrapper } from "./styles"
import TaskGroup from "domain/entity/TaskGroup/TaskGroup"

type PropsT = {
  data: TaskGroup
}

const Column: FC<PropsT> = (props) => {
  const { data } = props
  const { items, title } = data

  return <Wrapper>{title}</Wrapper>
}

export default Column
