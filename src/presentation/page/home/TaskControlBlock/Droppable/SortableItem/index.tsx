import { FC } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import Task from "domain/entity/TaskBoard/Task"
import { Wrapper } from "./styles"

type PropsT = {
  data: Task
}

const SortableItem: FC<PropsT> = (props) => {
  const { data } = props
  const { id, name } = data
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Wrapper style={itemStyle} ref={setNodeRef} {...attributes} {...listeners}>
      Item {name}
    </Wrapper>
  )
}

export default SortableItem
