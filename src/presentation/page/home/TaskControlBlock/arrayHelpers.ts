import { arrayMove as dndKitArrayMove } from "@dnd-kit/sortable"

export const removeAtIndex = (
  array: Array<string | number>,
  index: number,
): Array<string | number> => {
  return [...array.slice(0, index), ...array.slice(index + 1)]
}

export const insertAtIndex = (
  array: Array<string | number>,
  index: number,
  item: string | number,
): Array<string | number> => {
  return [...array.slice(0, index), item, ...array.slice(index)]
}

export const arrayMove = (
  array: Array<string | number>,
  oldIndex: number,
  newIndex: number,
) => {
  return dndKitArrayMove(array, oldIndex, newIndex)
}
