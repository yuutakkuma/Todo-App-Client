import React, { FC } from 'react'

import { Container, Box, Heading, Discription, Button } from './style'
import { Props } from './type'

const Modal: FC<Props> = ({ title, discription, onClick }) => (
  <Container>
    <Box height='30%'>
      <Heading>{title}</Heading>
    </Box>
    <Box height='50%'>
      <Discription>{discription}</Discription>
    </Box>
    <Box height='20%'>
      <Button type='button' title='OK' onClick={onClick} />
    </Box>
  </Container>
)

export default Modal
