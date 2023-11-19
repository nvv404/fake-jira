import { createAsyncThunk } from "@reduxjs/toolkit"
import TASK_BOARD_MOCK_DATA from "data/__mock__/taskBoardMockData.ts"
import ActionTypePrefix from "data/store/tasksBoardReducer/types/ActionTypePrefix"
import TaskBoard from "domain/entity/TaskBoard/TaskBoard"
import FetchTaskBoardsPayloadT from "data/store/tasksBoardReducer/types/FetchTaskBoardsPayloadT"

export const fetchTaskBoards = createAsyncThunk<
  TaskBoard[],
  FetchTaskBoardsPayloadT,
  Required<{
    rejectValue: string
  }>
>(ActionTypePrefix.FetchBoards, async (payload, { rejectWithValue }) => {
  try {
    const { endDate, startDate } = payload
    // Fake api call
    const data = await new Promise<TaskBoard[]>((resolve) =>
      setTimeout(() => resolve(TASK_BOARD_MOCK_DATA), 2000),
    )

    /*
      dates filter should be passed to api as a payload
      we use it here just for an example
    */
    const formattedData: TaskBoard[] = data.map((board) => {
      const filteredData = board.data.filter((task) => {
        const parsedTaskCreationDate = Date.parse(task.creationDate)
        const parsedStartFilterDate = Date.parse(startDate || "")
        const parsedEndFilterDate = Date.parse(endDate || "")

        if (startDate && endDate) {
          return (
            parsedTaskCreationDate >= parsedStartFilterDate &&
            parsedTaskCreationDate <= parsedEndFilterDate
          )
        }

        if (startDate) {
          return parsedTaskCreationDate >= parsedStartFilterDate
        }

        if (endDate) {
          return parsedTaskCreationDate <= parsedEndFilterDate
        }

        return true
      })

      return { ...board, data: filteredData }
    })

    return formattedData
  } catch (e) {
    return rejectWithValue("something went wrong")
  }
})
