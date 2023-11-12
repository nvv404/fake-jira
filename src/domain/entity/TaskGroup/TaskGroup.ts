import Task from "domain/entity/Task/Task"

export default class TaskGroup {
  constructor(
    public readonly id: number,
    public readonly title: string,
    public readonly items: Task[],
  ) {}
}
