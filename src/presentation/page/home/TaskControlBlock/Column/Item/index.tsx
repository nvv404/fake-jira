import { FC } from "react"
import Task from "domain/entity/Task/Task"
import { Wrapper } from "./styles"

type PropsT = {
  data: Task
}

const Item: FC<PropsT> = (props) => {
  const { data } = props
  const { name } = data

  return <Wrapper draggable>{name}</Wrapper>
}

export default Item
