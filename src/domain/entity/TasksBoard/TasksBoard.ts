import Task from "domain/entity/Task/Task"

export default interface TasksBoard {
  id: number
  title: string
  items: Task[]
}
