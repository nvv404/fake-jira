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
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import Droppable from "./Droppable"
import { arrayMove, insertAtIndex, removeAtIndex } from "./arrayHelpers"
import useAppSelector from "presentation/hook/useAppSelector"
import Task from "domain/entity/TaskBoard/Task"

const TaskControlBlock: FC = () => {
  const { data } = useAppSelector(({ tasksBoard }) => tasksBoard)
  const [items, setItems] = useState<TaskBoard[]>(data)

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  )

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

  const handleDragOver = (event: DragOverEvent) => {
    const { over, active } = event
    const overId = over?.id
    const activeDataCurrent = active.data.current

    if (!overId || !activeDataCurrent) {
      return
    }

    const activeContainerId = activeDataCurrent.sortable.containerId
    const overContainerId = over.data.current?.sortable.containerId

    if (!overContainerId) {
      return
    }

    if (activeContainerId !== overContainerId) {
      setItems((prevState) => {
        const activeIndex = activeDataCurrent.sortable.index
        const overIndex = over.data.current?.sortable.index || 0

        return moveBetweenContainers(
          prevState,
          activeContainerId,
          activeIndex,
          overContainerId,
          overIndex,
          // TODO: Try to remove as string expression
          active.id as string,
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
          newItems = items.map((item) => {
            if (item.id === overContainerKey) {
              const data = arrayMove(item.data, activeIndex, overIndex)

              return { ...item, data }
            }

            return item
          })
        } else {
          newItems = moveBetweenContainers(
            items,
            activeContainer,
            activeIndex,
            overContainerKey,
            overIndex,
            active.id as string,
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
        {items.map((board) => (
          <Droppable data={board} key={board.id} />
        ))}
      </div>
    </DndContext>
  )
}

export default TaskControlBlock
