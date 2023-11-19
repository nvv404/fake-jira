import { FC } from "react"
import Filters from "./Filters"
import TaskControlBlock from "./TaskControlBlock"
import { Wrapper, Title } from "./styles"

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Title>Main Halloween Jira Board </Title>
      <Filters />
      <TaskControlBlock />
    </Wrapper>
  )
}

export default HomePage
