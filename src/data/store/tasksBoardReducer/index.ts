import {
  createSlice,
  isFulfilled,
  isPending,
  isRejected,
} from "@reduxjs/toolkit"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import { fetchTaskBoards } from "data/store/tasksBoardReducer/api/actions"

type StateT = {
  data: TaskBoard[]
  isLoading: boolean
}

const initialState: StateT = {
  data: [],
  isLoading: false,
}

const tasksBoardSlice = createSlice({
  name: "tasksBoard",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchTaskBoards.fulfilled, (state, { payload }) => {
      state.data = payload
    })

    builder.addMatcher(isPending, (state) => {
      state.isLoading = true
    })
    builder.addMatcher(isRejected, (state) => {
      state.isLoading = false
    })
    builder.addMatcher(isFulfilled, (state) => {
      state.isLoading = false
    })
  },
})

export default tasksBoardSlice.reducer
