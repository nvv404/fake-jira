import { FC, PropsWithChildren } from "react"
import { Wrapper, Header, Content } from "./styles"

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Wrapper>
      <Header>header</Header>
      <Content>{children}</Content>
    </Wrapper>
  )
}

export default Layout
