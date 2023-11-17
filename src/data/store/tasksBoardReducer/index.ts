import { createSlice } from "@reduxjs/toolkit"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import TASK_BOARD_MOCK_DATA from "data/__mock__/taskBoardMockData.ts"

type StateT = {
  data: TaskBoard[]
}

const initialState: StateT = {
  data: TASK_BOARD_MOCK_DATA,
}

const tasksBoardSlice = createSlice({
  name: "tasksBoard",
  initialState,
  reducers: {},
})

export default tasksBoardSlice.reducer
