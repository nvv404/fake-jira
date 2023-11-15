import { v4 } from "uuid"
import { createSlice } from "@reduxjs/toolkit"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"

const API_MOCK_DATA: TaskBoard[] = [
  {
    id: "todo",
    data: [
      { creationDate: "", id: v4(), name: "Make homework" },
      { creationDate: "", id: v4(), name: "cook pizza" },
    ],
    name: "to do",
  },
  {
    id: "inProgress",
    data: [
      { creationDate: "", id: v4(), name: "Deploy server" },
      { creationDate: "", id: v4(), name: "update project deps" },
    ],
    name: "in progress",
  },
  { id: "completed", data: [], name: "completed" },
  {
    id: "delete",
    data: [{ creationDate: "", id: v4(), name: "implement home page" }],
    name: "deleted",
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
