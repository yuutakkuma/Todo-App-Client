import React, { FC } from 'react'

import ErrorMessage from '../../common/ErrorMessage'

import { Container, Counter } from './style'
import { Props } from './type'

const CharacterCounter: FC<Props> = ({ characterCounts: character, error }) => (
  <Container>
    <Counter color={error ? 'rgba(246, 131, 15, 1)' : 'rgba(244, 244, 242, 1)'}>
      {`${character}/25`}
    </Counter>
    {error && <ErrorMessage message={error} />}
  </Container>
)

export default CharacterCounter
