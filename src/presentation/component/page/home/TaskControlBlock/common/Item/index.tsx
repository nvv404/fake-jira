import { forwardRef, HTMLAttributes } from "react"
import dayjs from "dayjs"
import Task from "domain/entity/TaskBoard/Task"
import { Wrapper, Title, Text } from "./styles"

const DATE_FORMAT = "DD/MM/YYYY"

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
      <Title>{name}</Title>
      <Text>Created: {dayjs(creationDate).format(DATE_FORMAT)}</Text>
    </Wrapper>
  )
})

export default Item
