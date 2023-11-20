import styled from "@emotion/styled"
import BaseProgress from "presentation/component/common/block/Loader"

export const Wrapper = styled.div`
  position: relative;
  flex: 1 1 auto;
  display: grid;
  grid-template-columns: repeat(4, minmax(250px, 1fr));
  column-gap: 10px;
  margin-top: 20px;
  overflow-x: scroll;
`

export const Progress = styled(BaseProgress)`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`
