import styled from "@emotion/styled"

export const Wrapper = styled.div`
  flex: 1 1 auto;
  display: grid;
  column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: auto;
`
