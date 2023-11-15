import styled from "@emotion/styled"

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 3px;
  background-color: ${({ theme }) => theme.colors.mainDark};
  padding: 10px;
`

export const Inner = styled.div`
  flex: 1 1 auto;
  /*
    touch actions are needed to support dnd on mobile
  */
  touch-action: none;
`
