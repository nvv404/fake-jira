import TaskStatus from "./TaskStatus"

export default class Task {
  constructor(
    public readonly name: string,
    public readonly creationDate: string,
    public readonly status: TaskStatus,
  ) {}
}
