import React, { FC } from 'react'

import {
  StyledModalContainer,
  StyledModalBox,
  Heading,
  Discription,
  Button
} from './style'
import { Props } from './type'

const Modal: FC<Props> = ({ title, discription, onClick }) => (
  <StyledModalContainer>
    <StyledModalBox height='20%'>
      <Heading>{title}</Heading>
    </StyledModalBox>
    <StyledModalBox height='60%'>
      <Discription>{discription}</Discription>
    </StyledModalBox>
    <StyledModalBox height='20%'>
      <Button type='button' title='OK' onClick={onClick} />
    </StyledModalBox>
  </StyledModalContainer>
)

export default Modal
