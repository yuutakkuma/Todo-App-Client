import React from 'react'
import styled, {keyframes} from 'styled-components'

interface Props {
  float?: number
  width?: number
  height?: number
}

const animated = keyframes`
  0% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
  80% {
    transform: scale(0);
  }
  100% {
    transform: scale(0);
  }
`

const Spinner = styled.div`
  text-align: center;
`

const Bounce = styled.div`
  display: inline-block;
  width: ${({width}: Props) => `${width}px`};
  height: ${({height}: Props) => `${height}px`};
  background-color: gray;
  border-radius: 50%;
  animation: ${animated} 1.5s infinite;
  animation-delay: ${({float = 0}: Props) => `${float}s`};

`

export const Loading: React.FC<Props> = ({width = 18, height = 18}) => {
  return (
    <Spinner>
      <Bounce float={-0.32} width={width} height={height} />
      <Bounce float={-0.16} width={width} height={height} />
      <Bounce width={width} height={height} />
    </Spinner>
  )
}
