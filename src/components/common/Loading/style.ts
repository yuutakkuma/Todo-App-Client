import styled, { keyframes } from 'styled-components'

const animated = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoadingContainer = styled.div<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background-color: transparent;
  animation: ${animated} 2s linear infinite;
`

export const Loader = styled.div`
  position: relative;
  width: 50%;
  height: 100%;
  background: linear-gradient(to top, transparent, rgba(253, 253, 253, 1));
  background-repeat: no-repeat;
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 25%;
    height: 10%;
    position: absolute;
    top: 0px;
    right: -10%;
    border-radius: 50%;
    background-color: rgba(253, 253, 253, 1);
  }
`

export const Circle = styled.div<{ circleColor: string }>`
  width: 80%;
  height: 80%;
  position: absolute;
  right: 0px;
  background-color: ${({ circleColor }) => circleColor};
  border-top-left-radius: 100px;
  border-bottom-left-radius: 100px;
`
