import { ButtonHTMLAttributes, forwardRef, ReactNode } from "react"
import { BaseButton, PropsT as BaseButtonPropsT } from "./styles"

export type PropsT = ButtonHTMLAttributes<HTMLButtonElement> &
  Partial<BaseButtonPropsT> & {
    startAdornment?: ReactNode
  }

const Button = forwardRef<HTMLButtonElement, PropsT>((props, ref) => {
  const { children, variant = "primary", startAdornment, ...restProps } = props

  return (
    <BaseButton variant={variant} ref={ref} type="button" {...restProps}>
      {children}
    </BaseButton>
  )
})

export default Button
