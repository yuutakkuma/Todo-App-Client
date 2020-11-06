import React, { FC } from 'react'

import { Container, Border } from './style'
import { Props } from './type'

const HambugerButton: FC<Props> = ({ className, onClick }) => (
  <Container className={className} onClick={onClick}>
    <Border />
    <Border />
    <Border />
  </Container>
)

export default HambugerButton
