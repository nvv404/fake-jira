import { FC, PropsWithChildren } from "react"
import Header from "./Header"
import { Wrapper, Footer, Content } from "./styles"

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Wrapper>
      <Header /> 
      <Content>{children}</Content>
      <Footer>bats footer</Footer>
    </Wrapper>
  )
}

export default Layout
