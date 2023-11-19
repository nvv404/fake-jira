import { forwardRef, HTMLAttributes } from "react"
import Task from "domain/entity/TaskBoard/Task"
import { Wrapper } from "./styles"

export type ItemProps = HTMLAttributes<HTMLLIElement> & {
  data: Task
  withOpacity?: boolean
  isDragging?: boolean
  taskData?: Task
}

const Item = forwardRef<HTMLLIElement, ItemProps>((props, ref) => {
  const { withOpacity, data, isDragging, style, ...restProps } = props
  const { name, creationDate } = data

  return (
    <Wrapper
      isWithOpacity={withOpacity}
      isGrabbing={isDragging}
      ref={ref}
      style={style}
      {...restProps}
    >
      {name}
      {creationDate}
    </Wrapper>
  )
})

export default Item
