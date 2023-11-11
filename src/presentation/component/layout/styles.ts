import styled from "@emotion/styled"

export const Wrapper = styled.div`
  padding: 0 var(--container-gutter);
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.black};
`
export const Content = styled.div`
  margin-top: 20px;
`
