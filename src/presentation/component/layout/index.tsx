import { FC, PropsWithChildren } from "react"
import Header from "./Header"
import Footer from "./Footer"
import { Wrapper, Content } from "./styles"

const Layout: FC<PropsWithChildren> = (props) => {
  const { children } = props

  return (
    <Wrapper>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Wrapper>
  )
}

export default Layout
