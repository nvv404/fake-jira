import { FC, useCallback, useEffect, useState } from "react"
import useAppSelector from "presentation/hook/useAppSelector"
import {
  DragEndEvent,
  DragStartEvent,
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { Props } from "@dnd-kit/core/dist/components/DndContext/DndContext"
import Task from "domain/entity/TaskBoard/Task"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import { arrayMove, insertAtIndex, removeAtIndex } from "./arrayHelpers"

type ActiveTaskT = Task | null

export type WithTaskBoardDNDLogicPropsT = {
  sensors: Props["sensors"]
  collisionDetection: Props["collisionDetection"]
  onDragStart: Props["onDragStart"]
  onDragEnd: Props["onDragEnd"]
  onDragCancel: Props["onDragCancel"]
  items: TaskBoard[]
  activeTask: ActiveTaskT
}

const withDNDLogic = (
  Component: FC<WithTaskBoardDNDLogicPropsT>,
): FC<WithTaskBoardDNDLogicPropsT> => {
  return () => {
    const { data } = useAppSelector(({ tasksBoard }) => tasksBoard)
    const [items, setItems] = useState<TaskBoard[]>(data)
    const [activeTask, setActiveTask] = useState<ActiveTaskT>(null)
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
        const overContainerType =
          overDataCurrent?.sortable.containerId || over.id
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

    useEffect(() => {
      setItems(data)
    }, [data])

    return (
      <Component
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
        items={items}
        activeTask={activeTask}
      />
    )
  }
}

export default withDNDLogic
