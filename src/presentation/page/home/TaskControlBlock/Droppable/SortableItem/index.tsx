import { FC } from "react"
import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { Wrapper } from "./styles"

type PropsT = {
  id: string | number
}

const SortableItem: FC<PropsT> = (props) => {
  const { id } = props
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id })

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  }

  return (
    <Wrapper style={itemStyle} ref={setNodeRef} {...attributes} {...listeners}>
      Item {props.id}
    </Wrapper>
  )
}

export default SortableItem
