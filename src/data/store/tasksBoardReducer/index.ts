import { v4 } from "uuid"
import { createSlice } from "@reduxjs/toolkit"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import BoardType from "domain/entity/TaskBoard/BoardType"

const API_MOCK_DATA: TaskBoard[] = [
  {
    id: "todo",
    type: BoardType.Todo,
    data: [
      { creationDate: "", id: v4(), name: "Make homework" },
      { creationDate: "", id: v4(), name: "cook pizza" },
    ],
    name: "to do",
    availableToTransitionBoardTypes: [BoardType.InProgress],
  },
  {
    id: "inProgress",
    type: BoardType.InProgress,
    data: [
      { creationDate: "", id: v4(), name: "Deploy server" },
      { creationDate: "", id: v4(), name: "update project deps" },
    ],
    name: "in progress",
    availableToTransitionBoardTypes: [BoardType.Completed, BoardType.Deleted],
  },
  {
    id: "completed",
    type: BoardType.Completed,
    data: [],
    name: "completed",
    availableToTransitionBoardTypes: [BoardType.Deleted, BoardType.InProgress],
  },

  {
    id: "delete",
    type: BoardType.Deleted,
    data: [{ creationDate: "", id: v4(), name: "implement home page" }],
    name: "deleted",
    availableToTransitionBoardTypes: [BoardType.InProgress],
  },
]

type StateT = {
  data: TaskBoard[]
}

const initialState: StateT = {
  data: API_MOCK_DATA,
}

const tasksBoardSlice = createSlice({
  name: "tasksBoard",
  initialState,
  reducers: {},
})

export default tasksBoardSlice.reducer
