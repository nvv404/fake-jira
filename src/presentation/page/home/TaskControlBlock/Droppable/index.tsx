import { FC } from "react"
import { useDroppable } from "@dnd-kit/core"
import { rectSortingStrategy, SortableContext } from "@dnd-kit/sortable"
import SortableItem from "./SortableItem"

type PropsT = {
  id: string | number
  items: Array<string | number>
}

const Droppable: FC<PropsT> = ({ id, items }) => {
  const { setNodeRef } = useDroppable({ id })

  const droppableStyle = {
    padding: "20px 10px",
    border: "1px solid black",
    borderRadius: "5px",
    minWidth: 110,
    touchAction: "none",
  }

  return (
    <SortableContext
      id={String(id)}
      items={items}
      strategy={rectSortingStrategy}
    >
      {id}
      <div ref={setNodeRef} style={droppableStyle}>
        {items.map((item) => (
          <SortableItem key={item} id={item} />
        ))}
      </div>
    </SortableContext>
  )
}

export default Droppable
