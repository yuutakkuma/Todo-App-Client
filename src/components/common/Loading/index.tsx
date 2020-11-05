import React, { FC } from 'react'

import { LoadingContainer, Loader, Circle } from './style'
import { Props } from './type'

const Loading: FC<Props> = ({ width, height, circleColor }) => (
  <LoadingContainer width={width} height={height}>
    <Loader>
      <Circle circleColor={circleColor} />
    </Loader>
  </LoadingContainer>
)

export default Loading
