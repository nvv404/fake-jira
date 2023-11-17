import { v4 } from "uuid"
import BoardType from "domain/entity/TaskBoard/BoardType"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"

const TASK_BOARD_MOCK_DATA: TaskBoard[] = [
  {
    type: BoardType.Todo,
    data: [
      { creationDate: "", id: v4(), name: "Make homework" },
      { creationDate: "", id: v4(), name: "cook pizza" },
    ],
    name: "to do",
    availableToTransitionBoardTypes: [BoardType.InProgress],
  },
  {
    type: BoardType.InProgress,
    data: [
      { creationDate: "", id: v4(), name: "Deploy server" },
      { creationDate: "", id: v4(), name: "update project deps" },
    ],
    name: "in progress",
    availableToTransitionBoardTypes: [BoardType.Completed, BoardType.Deleted],
  },
  {
    type: BoardType.Completed,
    data: [],
    name: "completed",
    availableToTransitionBoardTypes: [BoardType.Deleted, BoardType.InProgress],
  },

  {
    type: BoardType.Deleted,
    data: [{ creationDate: "", id: v4(), name: "implement home page" }],
    name: "deleted",
    availableToTransitionBoardTypes: [BoardType.InProgress],
  },
]

export default TASK_BOARD_MOCK_DATA
