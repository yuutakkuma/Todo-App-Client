import React, { FC } from 'react'

import { Container } from './style'
import { Props } from './type'

const HambugerButton: FC<Props> = ({ className, onClick }) => (
  <Container className={className} onClick={onClick} />
)

export default HambugerButton
