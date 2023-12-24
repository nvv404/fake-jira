import { Dispatch, SetStateAction, useCallback, useState } from "react"
import { DragEndEvent, DragStartEvent } from "@dnd-kit/core"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import Task from "domain/entity/TaskBoard/Task"
import type { Props } from "@dnd-kit/core/dist/components/DndContext/DndContext"
import { arrayMove, insertAtIndex, removeAtIndex } from "./arrayHelpers"

type ActiveTaskT = Task | null

export type OptionsT = {
  activeTask: ActiveTaskT
  onDragStart: Props["onDragStart"]
  onDragEnd: Props["onDragEnd"]
  onDragCancel: Props["onDragCancel"]
}

const useDrag = (
  boards: TaskBoard[],
  setBoards: Dispatch<SetStateAction<TaskBoard[]>>,
): OptionsT => {
  const [activeTask, setActiveTask] = useState<ActiveTaskT>(null)

  const onDragStart = useCallback(
    (event: DragStartEvent) => {
      const { active } = event
      const board = boards.find(
        ({ type }) => type === active.data.current?.sortable.containerId,
      )

      if (!board) {
        return
      }
      const task = board.data.find(({ id }) => id === active.id)

      setActiveTask(task || null)
    },
    [boards],
  )

  const moveBetweenContainers = (
    items: TaskBoard[],
    activeContainerId: TaskBoard["type"],
    activeIndex: number,
    overContainerId: TaskBoard["type"],
    overIndex: number,
  ): TaskBoard[] => {
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

  const onDragEnd = useCallback((event: DragEndEvent) => {
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

      setBoards((items) => {
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
            )
          }
        }

        return newItems
      })
    }

    setActiveTask(null)
  }, [])

  const onDragCancel = useCallback(() => {
    setActiveTask(null)
  }, [])

  return { activeTask, onDragCancel, onDragEnd, onDragStart }
}

export default useDrag
