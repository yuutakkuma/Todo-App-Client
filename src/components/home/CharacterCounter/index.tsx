import React, { FC } from 'react'

import { Container, Counter, CounterErrorMessage } from './style'
import { Props } from './type'

const CharacterCounter: FC<Props> = ({ characterCounts, error }) => (
  <Container>
    <Counter
      color={
        error || characterCounts > 25
          ? 'rgba(246, 131, 15, 1)'
          : 'rgba(244, 244, 242, 1)'
      }
    >
      {`${characterCounts}/25`}
    </Counter>
    {error && <CounterErrorMessage message={error} />}
  </Container>
)

export default CharacterCounter
