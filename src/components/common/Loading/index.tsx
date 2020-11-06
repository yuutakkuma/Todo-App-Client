import React, { FC } from 'react'

import { Container, Loader, Circle } from './style'
import { Props } from './type'

const Loading: FC<Props> = ({ width, height, circleColor }) => (
  <Container width={width} height={height}>
    <Loader>
      <Circle circleColor={circleColor} />
    </Loader>
  </Container>
)

export default Loading
