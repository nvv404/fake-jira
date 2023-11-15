import { FC } from "react"
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import { useDroppable } from "@dnd-kit/core"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import SortableItem from "./SortableItem"

type PropsT = {
  data: TaskBoard
}

const Droppable: FC<PropsT> = (props) => {
  const { data } = props
  const { id, data: items, name } = data
  const { setNodeRef } = useDroppable({ id })

  const droppableStyle = {
    padding: "20px 10px",
    border: "1px solid black",
    borderRadius: "5px",
    minWidth: 110,
    // touchAction: "none",
  }

  return (
    <SortableContext id={id} items={items} strategy={rectSortingStrategy}>
      {name}
      <div ref={setNodeRef} style={droppableStyle}>
        {items.map((item) => (
          <SortableItem key={item.id} id={item.id} />
        ))}
      </div>
    </SortableContext>
  )
}

export default Droppable
