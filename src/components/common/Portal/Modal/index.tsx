import React, { FC } from 'react'

import {
  StyledModalContainer,
  StyledModalBox,
  Heading,
  Content,
  Button
} from './style'
import { Props } from './type'

const Modal: FC<Props> = ({ title, content, onClick }) => (
  <StyledModalContainer>
    <StyledModalBox flex={1}>
      <Heading>{title}</Heading>
    </StyledModalBox>
    <StyledModalBox flex={3}>
      <Content>{content}</Content>
    </StyledModalBox>
    <StyledModalBox flex={2}>
      <Button type='button' title='OK' onClick={onClick} />
    </StyledModalBox>
  </StyledModalContainer>
)

export default Modal
