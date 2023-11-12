import { FC, createContext, useState } from "react"
import TasksBoard from "domain/entity/TasksBoard/TasksBoard"
import Task from "domain/entity/Task/Task"
import useAppSelector from "presentation/hook/useAppSelector"
import Column from "./Column"
import { Wrapper } from "./styles"

type BoardContextT = {
  boards: TasksBoard[] | undefined
  activeBoard: TasksBoard | undefined
  activeTask: Task | undefined
  handleBoardsChange: (board: TasksBoard[]) => void
  handleActiveBoardChange: (board: TasksBoard) => void
  handleActiveTaskChange: (task: Task) => void
}

export const BoardContext = createContext<BoardContextT>({
  boards: undefined,
  activeBoard: undefined,
  activeTask: undefined,
  handleBoardsChange: () => {},
  handleActiveBoardChange: () => {},
  handleActiveTaskChange: () => {},
})

const TaskControlBlock: FC = () => {
  const { data } = useAppSelector(({ tasksBoard }) => tasksBoard)
  const [boards, setBoards] = useState(data)
  const [activeBoard, setActiveBoard] = useState<TasksBoard>()
  const [activeTask, setActiveTask] = useState<Task>()

  const handleActiveTaskChange = (item: Task): void => {
    setActiveTask(item)
  }

  const handleActiveBoardChange = (item: TasksBoard) => {
    setActiveBoard(item)
  }

  const handleBoardsChange = (items: TasksBoard[]): void => {
    setBoards(items)
  }

  return (
    <BoardContext.Provider
      value={{
        boards,
        activeBoard,
        activeTask,
        handleActiveBoardChange,
        handleActiveTaskChange,
        handleBoardsChange,
      }}
    >
      <Wrapper>
        {boards.map((item) => (
          <Column key={item.id} currentBoard={item} />
        ))}
      </Wrapper>
    </BoardContext.Provider>
  )
}
export default TaskControlBlock
