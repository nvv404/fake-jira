import { FC } from "react"
import { DndContext, DragOverlay } from "@dnd-kit/core"
import withTaskBoardDNDLogic, {
  WithTaskBoardDNDLogicPropsT,
} from "presentation/component/page/home/TaskControlBlock/withTaskBoardDNDLogic"
import Content from "./Content"
import Item from "./common/Item"

type PropsT = WithTaskBoardDNDLogicPropsT

const TaskControlBlock: FC<PropsT> = (props) => {
  const { activeTask, items, ...restProps } = props

  return (
    <DndContext {...restProps}>
      <Content items={items} />
      <DragOverlay>
        {activeTask ? <Item data={activeTask} isDragging /> : null}
      </DragOverlay>
    </DndContext>
  )
}

export default withTaskBoardDNDLogic(TaskControlBlock)
