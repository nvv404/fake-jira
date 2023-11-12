import styled from "@emotion/styled"

export const Wrapper = styled.div()

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.mainDark};
`

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-top: 2px solid ${({ theme }) => theme.colors.mainDark};
  margin-top: auto;
`

export const Content = styled.div`
  display: flex;
  margin: 20px 0;
  flex: 1 1 auto;
  overflow: hidden;
`
