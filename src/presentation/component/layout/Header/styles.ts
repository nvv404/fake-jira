import { keyframes } from "@emotion/react"
import styled from "@emotion/styled"
import { ReactComponent as BasePumpkinLogo } from "presentation/asset/svg/pumpkin.svg"

const bounceKeyframe = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -20px, 0);
  }

  70% {
    transform: translate3d(0, -10px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

export const PumpkinLogo = styled(BasePumpkinLogo)`
  width: 80px;
  height: 80px;
  animation: ${bounceKeyframe} 1s ease;
`

export const Wrapper = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primaryDark};
`
