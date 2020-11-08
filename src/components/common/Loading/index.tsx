import React, { FC } from 'react'

import {
  Container,
  Frame,
  Text,
  LargeLoader,
  MidiumLoader,
  SmallLoader
} from './style'
import { Props, LoadingMode } from './type'

const Loading: FC<Props> = ({ mode }) => (
  <>
    {mode === LoadingMode.LARGE && (
      <Container>
        <Frame width='150px' height='150px'>
          <LargeLoader cx='70' cy='70' r='70' />
        </Frame>
        <Text>NowLoading</Text>
      </Container>
    )}
    {mode === LoadingMode.MIDIUM && (
      <Frame width='90px' height='90px'>
        <MidiumLoader cx='40' cy='40' r='40' />
      </Frame>
    )}
    {mode === LoadingMode.SMALL && (
      <Frame width='30px' height='30px'>
        <SmallLoader cx='10' cy='10' r='10' />
      </Frame>
    )}
  </>
)

export default Loading
