import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable"
import Task from "domain/entity/TaskBoard/Task"

export const removeAtIndex = (array: Task[], index: number): Task[] => {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

export const insertAtIndex = (
  array: Task[],
  index: number,
  item: Task,
): Task[] => {
  return [...array.slice(0, index), item, ...array.slice(index)]
}

export const arrayMove = (
  array: Task[],
  oldIndex: number,
  newIndex: number,
) => {
  return dndKitArrayMove(array, oldIndex, newIndex)
}
