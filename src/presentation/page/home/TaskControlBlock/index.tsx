import { FC } from "react"
import { useState } from "react"
import Column from "./Column"
import { Wrapper } from "./styles"



const TaskControlBlock: FC = () => {
  

  return (
    <Wrapper>
      {items.map((item) => (
        <Column key = {} title = {} id = {} cards = []> ({item})</Column>
      ))}
    </Wrapper>
  )
}
export default TaskControlBlock
