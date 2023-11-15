import BoardType from "domain/entity/TaskBoard/BoardType"
import Task from "./Task"

export default interface TaskBoard {
  id: string
  type: BoardType
  name: string
  data: Task[]
  availableToTransitionBoardTypes: BoardType[]
}
