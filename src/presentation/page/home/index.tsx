import { FC } from "react"
import Filters from "./Filters"
import ProgressControlBlock from "./ProgressControlBlock"
import { Wrapper, Title } from "./styles"

const HomePage: FC = () => {
  return (
    <Wrapper>
      <Title>Board</Title>
      <Filters />
      <ProgressControlBlock />
    </Wrapper>
  )
}

export default HomePage
