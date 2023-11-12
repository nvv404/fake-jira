import { DragEventHandler, FC, useContext } from "react"
import Task from "domain/entity/Task/Task"
import TasksBoard from "domain/entity/TasksBoard/TasksBoard"
import { BoardContext } from "presentation/page/home/TaskControlBlock"
import { Wrapper } from "./styles"

type PropsT = {
  currentTask: Task
  currentBoard: TasksBoard
}

const Item: FC<PropsT> = (props) => {
  const { currentTask, currentBoard } = props
  const {
    boards = [],
    activeBoard,
    activeTask,
    handleActiveBoardChange,
    handleActiveTaskChange,
    handleBoardsChange: handleBoardsUpdate,
  } = useContext(BoardContext)
  const { name } = currentTask

  const handleDragOver: DragEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault()

    const { target } = e

    if (target instanceof HTMLElement && target.tagName === "LI") {
      target.style.boxShadow = "0 2px 3px red"
    }
  }

  const handleDragLeave: DragEventHandler<HTMLLIElement> = (e) => {
    const { target } = e

    if (target instanceof HTMLElement && target.tagName === "LI") {
      target.style.boxShadow = "none"
    }
  }

  const handleDragStart: DragEventHandler<HTMLLIElement> = () => {
    handleActiveBoardChange(currentBoard)
    handleActiveTaskChange(currentTask)
  }

  const handleDragEnd: DragEventHandler<HTMLLIElement> = (e) => {
    const { target } = e

    if (target instanceof HTMLElement && target.tagName === "LI") {
      target.style.boxShadow = "none"
    }
  }

  const handleDrop: DragEventHandler<HTMLLIElement> = (e) => {
    e.preventDefault()

    if (activeBoard && activeTask) {
      /*
        remove task from start board
      */
      const activeTaskIndex = activeBoard.items.indexOf(activeTask)
      const activeBoardCopy = { ...activeBoard, items: [...activeBoard.items] }
      activeBoardCopy.items.splice(activeTaskIndex, 1)

      /*
        add task to drop board
      */
      const dropBoardCopy = {
        ...currentBoard,
        items: [...currentBoard.items],
      }
      const dropIndex = dropBoardCopy.items.indexOf(currentTask)
      dropBoardCopy.items.splice(dropIndex + 1, 0, activeTask)

      handleBoardsUpdate(
        boards.map((item) => {
          if (item.id === dropBoardCopy.id) {
            return dropBoardCopy
          }

          if (item.id === activeBoardCopy.id) {
            return activeBoardCopy
          }

          return item
        }),
      )
    }
  }

  return (
    <Wrapper
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
      onDrop={handleDrop}
      draggable
    >
      {name}
    </Wrapper>
  )
}

export default Item
