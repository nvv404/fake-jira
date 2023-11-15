import { FC } from "react"
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import { useDroppable } from "@dnd-kit/core"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import SortableItem from "./SortableItem"
import { Inner, Wrapper } from "./styles"

type PropsT = {
  data: TaskBoard
}

const DroppableColumn: FC<PropsT> = (props) => {
  const { data } = props
  const { type, data: items, name } = data
  const { setNodeRef } = useDroppable({ id: type })

  return (
    <SortableContext id={type} items={items} strategy={rectSortingStrategy}>
      <Wrapper>
        {name}
        <Inner ref={setNodeRef}>
          {items.map((item) => (
            <SortableItem key={item.id} id={item.id} />
          ))}
        </Inner>
      </Wrapper>
    </SortableContext>
  )
}

export default DroppableColumn
