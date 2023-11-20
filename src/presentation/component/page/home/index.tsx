import { FC } from "react"
import TaskControlBlock from "./TaskControlBlock"
import Filters from "./Filters"
import { Wrapper, Title } from "./styles"

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Title>Board</Title>
      <Filters />
      <TaskControlBlock />
    </Wrapper>
  )
}

export default HomePage
