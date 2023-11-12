import { useState, FC } from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverEvent,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import Droppable from "./Droppable"
import { arrayMove, insertAtIndex, removeAtIndex } from "./arrayHelpers"

type ItemsT = {
  [key: string]: Array<string | number>
}

const TaskControlBlock: FC = () => {
  const [items, setItems] = useState<ItemsT>({
    group1: ["1", "2", "3"],
    group2: ["4", "5", "6"],
    group3: ["7", "8", "9"],
  })

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

  const moveBetweenContainers = (
    items: ItemsT,
    activeContainerKey: string ,
    activeIndex: number,
    overContainerKey: string,
    overIndex: number,
    item: string | number,
  ): ItemsT => {
    return {
      ...items,
      [activeContainerKey]: removeAtIndex(
        items[activeContainerKey],
        activeIndex,
      ),
      [overContainerKey]: insertAtIndex(
        items[overContainerKey],
        overIndex,
        item,
      ),
    }
  }

  const handleDragOver = (event: DragOverEvent) => {
    const { over, active } = event
    const overId = over?.id
    const activeDataCurrent = active.data.current

    if (!overId || !activeDataCurrent) {
      return
    }

    const activeContainerKey = activeDataCurrent.sortable.containerId
    const overContainer = over.data.current?.sortable.containerId

    if (!overContainer) {
      return
    }

    if (activeContainerKey !== overContainer) {
      setItems((items) => {
        const activeIndex = activeDataCurrent.sortable.index
        const overIndex = over.data.current?.sortable.index || 0

        return moveBetweenContainers(
          items,
          activeContainerKey,
          activeIndex,
          overContainer,
          overIndex,
          active.id,
        )
      })
    }
  }

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event
    const activeDataCurrent = active.data.current

    if (!over || !activeDataCurrent) {
      return
    }

    if (active.id !== over.id) {
      const activeContainer = activeDataCurrent.sortable.containerId
      const overContainerKey =
        over.data.current?.sortable.containerId || over.id
      const activeIndex = activeDataCurrent.sortable.index
      const overIndex = over.data.current?.sortable.index || 0

      setItems((items) => {
        let newItems

        if (activeContainer === overContainerKey) {
          newItems = {
            ...items,
            [overContainerKey]: arrayMove(
              items[overContainerKey],
              activeIndex,
              overIndex,
            ),
          }
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainerKey,
            overIndex,
            active.id,
          )
        }

        return newItems
      })
    }
  }

  const containerStyle = { display: "flex" }

  return (
    <DndContext
      sensors={sensors}
      onDragEnd={handleDragEnd}
      onDragOver={handleDragOver}
    >
      <div style={containerStyle}>
        {Object.keys(items).map((group) => (
          <Droppable id={group} items={items[group]} key={group} />
        ))}
      </div>
    </DndContext>
  )
}

export default TaskControlBlock
