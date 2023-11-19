import { createAsyncThunk } from "@reduxjs/toolkit"
import TASK_BOARD_MOCK_DATA from "data/__mock__/taskBoardMockData.ts"
import ActionTypePrefix from "data/store/tasksBoardReducer/types/ActionTypePrefix"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"

export const fetchTaskBoards = createAsyncThunk<
  TaskBoard[],
  void,
  Required<{
    rejectValue: string
  }>
>(ActionTypePrefix.FetchBoards, async (_, { rejectWithValue }) => {
  try {
    // Fake api call
    const data = new Promise<TaskBoard[]>((resolve) =>
      setTimeout(() => resolve(TASK_BOARD_MOCK_DATA), 3000),
    )

    return data
  } catch (e) {
    return rejectWithValue("something went wrong")
  }
})
