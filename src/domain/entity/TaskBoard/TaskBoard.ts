import Task from "./Task"

export default interface TaskBoard {
  id: string
  name: string
  data: Task[]
}
