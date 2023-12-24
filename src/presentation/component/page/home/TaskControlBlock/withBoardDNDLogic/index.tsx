import { FC, useEffect, useState } from "react"
import useAppSelector from "presentation/hook/useAppSelector"
import {
  MouseSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
} from "@dnd-kit/core"
import { Props } from "@dnd-kit/core/dist/components/DndContext/DndContext"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import useDrag, {
  OptionsT as UseDragResultT,
} from "presentation/component/page/home/TaskControlBlock/withBoardDNDLogic/hook/useDrag"

export type WithTaskBoardDNDLogicResultT = UseDragResultT & {
  sensors: Props["sensors"]
  collisionDetection: Props["collisionDetection"]
  items: TaskBoard[]
}

const withBoardDNDLogic = (Component: FC<WithTaskBoardDNDLogicResultT>): FC => {
  return () => {
    const { data } = useAppSelector(({ tasksBoard }) => tasksBoard)
    const [boards, setBoards] = useState<TaskBoard[]>(data)
    const sensors = useSensors(useSensor(MouseSensor), useSensor(TouchSensor))
    const dragOptions = useDrag(boards, setBoards)

    useEffect(() => {
      setBoards(data)
    }, [data])

    return (
      <Component
        sensors={sensors}
        collisionDetection={closestCenter}
        items={boards}
        {...dragOptions}
      />
    )
  }
}

export default withBoardDNDLogic
