import { createSlice } from "@reduxjs/toolkit"
import TaskGroup from "domain/entity/TaskGroup/TaskGroup"

const API_MOCK_DATA: TaskGroup[] = [
  {
    id: 0,
    items: [
      { creationDate: "", id: 0, name: "Make homework" },
      { creationDate: "", id: 1, name: "cook pizza" },
    ],
    title: "to do",
  },
  {
    id: 1,
    items: [
      { creationDate: "", id: 0, name: "Deploy server" },
      { creationDate: "", id: 1, name: "update project deps" },
    ],
    title: "in progress",
  },
  { id: 2, items: [], title: "completed" },
  {
    id: 3,
    items: [{ creationDate: "", id: 0, name: "implement home page" }],
    title: "deleted",
  },
]

type StateT = {
  data: TaskGroup[]
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
