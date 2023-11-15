import { FC, useCallback, useState } from "react"
import {
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import Task from "domain/entity/TaskBoard/Task"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import useAppSelector from "presentation/hook/useAppSelector"
import { arrayMove, insertAtIndex, removeAtIndex } from "./arrayHelpers"
import Droppable from "./Droppable"
import Item from "./Item"

const TaskControlBlock: FC = () => {
  const { data } = useAppSelector(({ tasksBoard }) => tasksBoard)
  const [items, setItems] = useState<TaskBoard[]>(data)
  const [activeId, setActiveId] = useState<Task["id"] | null>(null)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  const handleDragStart = useCallback((event: DragStartEvent) => {
    setActiveId(event.active.id as string)
  }, [])

  const moveBetweenContainers = (
    items: TaskBoard[],
    activeContainerId: TaskBoard["id"],
    activeIndex: number,
    overContainerId: TaskBoard["id"],
    overIndex: number,
    activeItemId: Task["id"],
  ): TaskBoard[] => {
    // TODO: Can we remove removedTask var ?
    let removedTask: Task | undefined

    const boardsWithRemovedActiveTask = items.map((item) => {
      if (item.id === activeContainerId) {
        removedTask = item.data[activeIndex]
        const data = removeAtIndex(item.data, activeIndex)

        return { ...item, data }
      }

      return item
    })

    if (!removedTask) {
      return items
    }

    return boardsWithRemovedActiveTask.map((item) => {
      if (item.id === overContainerId) {
        const data = insertAtIndex(item.data, overIndex, removedTask as Task)

        return { ...item, data }
      }

      return item
    })
  }

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    const { over, active } = event
    const overId = over?.id
    const activeDataCurrent = active.data.current

    if (!overId || !activeDataCurrent) {
      return
    }

    if (active.id !== over.id) {
      const activeContainerId = activeDataCurrent.sortable.containerId
      const overContainerId = over.data.current?.sortable.containerId || over.id
      const activeIndex = activeDataCurrent.sortable.index
      const overIndex = over.data.current?.sortable.index || 0

      setItems((items) => {
        let newItems

        if (activeContainerId === overContainerId) {
          newItems = items.map((item) => {
            if (item.id === overContainerId) {
              const data = arrayMove(item.data, activeIndex, overIndex)

              return { ...item, data }
            }

            return item
          })
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainerId,
            activeIndex,
            overContainerId,
            overIndex,
            active.id as string,
          )
        }

        return newItems
      })
    }

    setActiveId(null)
  }, [])

  const handleDragCancel = useCallback(() => {
    setActiveId(null)
  }, [])

  const containerStyle = { display: "flex" }

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <div style={containerStyle}>
        {items.map((board) => (
          <Droppable data={board} key={board.id} />
        ))}
      </div>
      <DragOverlay adjustScale style={{ transformOrigin: "0 0 " }}>
        {activeId ? <Item id={activeId} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  )
}

export default TaskControlBlock
