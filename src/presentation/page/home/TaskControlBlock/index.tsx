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
import Content from "./Content"
import Item from "./Item"

const TaskControlBlock: FC = () => {
  const { data } = useAppSelector(({ tasksBoard }) => tasksBoard)
  const [items, setItems] = useState<TaskBoard[]>(data)
  const [activeTask, setActiveTask] = useState<Task | null>(null)
  const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))

  const handleDragStart = useCallback(
    (event: DragStartEvent) => {
      const { active } = event
      const board = items.find(
        ({ type }) => type === active.data.current?.sortable.containerId,
      )

      if (!board) {
        return
      }
      const task = board.data.find(({ id }) => id === active.id)

      setActiveTask(task || null)
    },
    [items],
  )

  const moveBetweenContainers = (
    items: TaskBoard[],
    activeContainerId: TaskBoard["type"],
    activeIndex: number,
    overContainerId: TaskBoard["type"],
    overIndex: number,
    activeItemId: Task["id"],
  ): TaskBoard[] => {
    // TODO: Can we remove removedTask var ?
    let removedTask: Task | undefined

    const boardsWithRemovedActiveTask = items.map((item) => {
      if (item.type === activeContainerId) {
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
      if (item.type === overContainerId) {
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
    const overDataCurrent = over?.data.current

    if (!overId || !activeDataCurrent) {
      return
    }

    if (active.id !== over.id) {
      const activeContainerType = activeDataCurrent.sortable.containerId
      const overContainerType = overDataCurrent?.sortable.containerId || over.id
      const activeIndex = activeDataCurrent.sortable.index
      const overIndex = overDataCurrent?.sortable.index || 0

      setItems((items) => {
        let newItems = items

        if (activeContainerType === overContainerType) {
          newItems = items.map((item) => {
            if (item.type === overContainerType) {
              const data = arrayMove(item.data, activeIndex, overIndex)

              return { ...item, data }
            }

            return item
          })
        } else {
          const activeBoard = items.find(
            ({ type }) => type === activeContainerType,
          )

          if (
            activeBoard?.availableToTransitionBoardTypes.includes(
              overContainerType,
            )
          ) {
            newItems = moveBetweenContainers(
              items,
              activeContainerType,
              activeIndex,
              overContainerType,
              overIndex,
              active.id as string,
            )
          }
        }

        return newItems
      })
    }

    setActiveTask(null)
  }, [])

  const handleDragCancel = useCallback(() => {
    setActiveTask(null)
  }, [])

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDragCancel={handleDragCancel}
    >
      <Content items={items} />
      <DragOverlay>
        {activeTask ? <Item data={activeTask} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  )
}

export default TaskControlBlock
