import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const largeAnimated = keyframes`
  0%,
    100% {
      stroke-dashoffset: 440;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 880;
    }
`

const midiumAnimated = keyframes`
  0%,
    100% {
      stroke-dashoffset: 270;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 540;
    }
`

const smallAnimated = keyframes`
  0%,
    100% {
      stroke-dashoffset: 60;
    }
    50% {
      stroke-dashoffset: 0;
    }
    50.1% {
      stroke-dashoffset: 120;
    }
`

const loaderColor = 'rgba(235, 235, 235, 1)'

export const Container = styled.svg<{ width: string; height: string }>`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  position: relative;
  animation: ${rotate} 2s linear infinite;
`

export const LargeLoader = styled.circle`
  width: 1000%;
  height: 100%;
  fill: none;
  stroke: ${loaderColor};
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 440;
  stroke-dashoffset: 440;
  transform: translate(5px, 5px);
  animation: ${largeAnimated} 4s linear infinite;
`

export const MidiumLoader = styled.circle`
  width: 1000%;
  height: 100%;
  fill: none;
  stroke: ${loaderColor};
  stroke-width: 8;
  stroke-linecap: round;
  stroke-dasharray: 270;
  stroke-dashoffset: 270;
  transform: translate(5px, 5px);
  animation: ${midiumAnimated} 4s linear infinite;
`

export const SmallLoader = styled.circle`
  width: 1000%;
  height: 100%;
  fill: none;
  stroke: ${loaderColor};
  stroke-width: 3;
  stroke-linecap: round;
  stroke-dasharray: 60;
  stroke-dashoffset: 60;
  transform: translate(5px, 5px);
  animation: ${smallAnimated} 4s linear infinite;
`
