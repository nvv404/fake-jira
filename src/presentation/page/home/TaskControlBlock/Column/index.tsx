import { FC } from "react"
import { Wrapper } from "./styles"

type PropsT = {
  title: string
  id: string
  cards: []
}

const Column: FC<PropsT> = () => {
  return <Wrapper>column</Wrapper>
}

export default Column
