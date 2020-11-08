import React, { FC } from 'react'

import { Container, LargeLoader, MidiumLoader, SmallLoader } from './style'
import { Props, LoadingMode } from './type'

const Loading: FC<Props> = ({ mode }) => (
  <>
    {mode === LoadingMode.LARGE && (
      <Container width='150px' height='150px'>
        <LargeLoader cx='70' cy='70' r='70' />
      </Container>
    )}
    {mode === LoadingMode.MIDIUM && (
      <Container width='90px' height='90px'>
        <MidiumLoader cx='40' cy='40' r='40' />
      </Container>
    )}
    {mode === LoadingMode.SMALL && (
      <Container width='30px' height='30px'>
        <SmallLoader cx='10' cy='10' r='10' />
      </Container>
    )}
  </>
)

export default Loading
