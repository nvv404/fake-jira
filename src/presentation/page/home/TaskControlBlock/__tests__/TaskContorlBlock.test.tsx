import { screen } from "@testing-library/react"
import { describe, it } from "vitest"
import TASK_BOARD_MOCK_DATA from "data/__mock__/taskBoardMockData.ts"
import { renderWithProviders } from "presentation/utils/renderWithProviders"
import TaskControlBlock from "presentation/page/home/TaskControlBlock"

describe("Kanban control block layout", () => {
  it("render kanban with mock items", async () => {
    renderWithProviders(<TaskControlBlock />, {
      preloadedState: {
        tasksBoard: { data: TASK_BOARD_MOCK_DATA },
      },
    })

    const mockFirstBoard = TASK_BOARD_MOCK_DATA[0]
    const boardFirstTask = mockFirstBoard.data[0]

    expect(screen.getByText(mockFirstBoard.name)).toBeInTheDocument()
    expect(screen.getByText(boardFirstTask.name)).toBeInTheDocument()
  })
})
