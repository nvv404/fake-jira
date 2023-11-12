import { FC, PropsWithChildren } from "react"
import { Wrapper, Header, Footer, Content } from "./styles"

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Wrapper>
      <Header>pumpkin header</Header>
      <Content>{children}</Content>
      <Footer>bats footer</Footer>
    </Wrapper>
  )
}

export default Layout
