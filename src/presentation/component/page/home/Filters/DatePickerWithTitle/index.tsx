import { FC } from "react"
import { PropsT as BaseDatePickerPropsT } from "presentation/component/common/control/DatePicker"
import Text from "presentation/component/common/typography/Text"
import { DatePicker, Wrapper } from "./styles"

type PropsT = BaseDatePickerPropsT & {
  title: string
}

const DatePickerWithTitle: FC<PropsT> = (props) => {
  const { title, ...restProps } = props

  return (
    <Wrapper>
      <Text weight="semiBold">{title}</Text>
      <DatePicker {...restProps} />
    </Wrapper>
  )
}

export default DatePickerWithTitle
